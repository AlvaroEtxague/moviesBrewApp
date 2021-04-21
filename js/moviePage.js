const API_KEY = 'c25ebaf6293a1c0f487f895e7bb10cf3';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const MOVIE_URL = `https://api.themoviedb.org/3/movie/`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const section = document.getElementById('movie');
const similarMoviesSection = document.getElementById('similar-movies');
const similarRecommendationsTitle = document.getElementById('similar-recommendations');
const movieImage = document.getElementById('bg-movie-image');
const noResultsSection = document.getElementById('no-results-section');

// Get movie
async function getMovie() {
	let movieId = sessionStorage.getItem('movieId');

	const response = await fetch(MOVIE_URL + movieId + '?api_key=' + API_KEY);
	const data = await response.json();

	showMovie(data);
	// console.log(data);
}

function showMovie(movie) {
	section.innerHTML = '';
	const { title, poster_path, vote_average, overview } = movie;

	const movieElement = document.createElement('div');
	movieElement.classList.add('movie');
	movieElement.innerHTML = `
	<div class="row">
			<div class="col1">
				<div class="movie-image">
						<img src="${IMG_PATH + poster_path}" onerror="if (this.src = 'https://image.tmdb.org/t/p/w1280null') this.src = 'images/error.jpg';" alt="${title}" />
				</div>  
			</div>

			<div class="col2">
				<div class="movie-info">
						<h2>${title}</h2>
						<div class="user-score">
							<span class="rating ${getClassByRate(vote_average)}">${vote_average}</span>
							<span class="user-score">User Score</span>
							<span><i onclick="styleHeartIcon()" class="fa fa-heart" aria-hidden="true"></i></span>
							<span><i onclick="styleBookmarkIcon()" class="fa fa-bookmark" aria-hidden="true"></i></span>
							<span><i onclick="styleFavoriteIcon()" class="fa fa-star" aria-hidden="true"></i></span>
						</div>

						<h4>Overview</h4>
						<p>${overview}</p>
				</div>
			</div>
	</div>
 `;

	section.appendChild(movieElement);
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}

// show similar movies
function movieSelected(id) {
	sessionStorage.setItem('movieId', id);
	window.location = 'moviePage.html';
	return false;
}

function styleHeartIcon() { 
	document.querySelector(".fa-heart").style.color = "#d63031";
	document.querySelector(".fa-heart").style.backgroundColor = "#fdcb6e";
	document.querySelector(".fa-heart").style.fontSize  = "20px";
	document.querySelector(".fa-heart").style.height  = "60px";
	document.querySelector(".fa-heart").style.width  = "60px";
	document.querySelector(".fa-heart").style.padding  = "1em";
}

function styleBookmarkIcon() { 
	document.querySelector(".fa-bookmark").style.color = "#6c5ce7";
	document.querySelector(".fa-bookmark").style.backgroundColor = "#fdcb6e";
	document.querySelector(".fa-bookmark").style.fontSize  = "20px";
	document.querySelector(".fa-bookmark").style.height  = "60px";
	document.querySelector(".fa-bookmark").style.width  = "60px";
	document.querySelector(".fa-bookmark").style.padding  = "1em";
}

function styleFavoriteIcon() { 
	document.querySelector(".fa.fa-star").style.color = "#00b894";
	document.querySelector(".fa.fa-star").style.backgroundColor = "#fdcb6e";
	document.querySelector(".fa.fa-star").style.fontSize  = "20px";
	document.querySelector(".fa.fa-star").style.height  = "60px";
	document.querySelector(".fa.fa-star").style.width  = "60px";
	document.querySelector(".fa.fa-star").style.padding  = "1em";
}

async function getSimilarMovies() {
	let movieId = sessionStorage.getItem('movieId');

	const response = await fetch(MOVIE_URL + movieId + '/similar?api_key=' + API_KEY);
	const data = await response.json();

	showSimilarMovies(data.results);
}

function showSimilarMovies(movies) {
	similarMoviesSection.innerHTML = ``;
	movies.forEach((movie) => {
		const { title, poster_path, id } = movie;

		const movieElement = document.createElement('div');
		movieElement.classList.add('movie');
		movieElement.innerHTML = `
		<a onclick="movieSelected('${id}')" target="_blank">		
				<img onclick="movieSelected('${id}')" class="similar-movie-image" src="${IMG_PATH + poster_path}" alt="${title}" />
		</a>
	`;

		similarMoviesSection.appendChild(movieElement);
	});
}

function showNoResults(data) {
	noResultsSection.innerHTML = '';

	if (data === 0) {
		let noResults = document.createElement('div');
		noResults.classList.add('no-results');
		noResults.innerHTML = `<h3 ><i class="far fa-sad-cry"></i> <span>No Movies Found. Try a different movie!</span></h3>`;

		noResultsSection.appendChild(noResults);
		similarMoviesSection.style.display = 'none';
	} else {
		similarMoviesSection.style.display = 'flex';
	}
}

// get movies
async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	showMovies(data.results);

	showNoResults(data.results.length);
}

function showMovies(movies) {
	similarMoviesSection.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview, id } = movie;

		const movieElement = document.createElement('div');
		movieElement.classList.add('movie');
		movieElement.innerHTML = `
		<a onclick="movieSelected('${id}')" target="_blank">		
				<img onclick="movieSelected('${id}')" class="similar-movie-image" src="${IMG_PATH + poster_path}" alt="${title}" />
		</a>
    `;

		similarMoviesSection.appendChild(movieElement);
	});
}

// search bar event listener
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const searchTerm = search.value;
	similarRecommendationsTitle.style.display = 'none';
	section.style.display = 'none';
	similarMoviesSection.style.marginTop = '10vh';

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_URL + searchTerm);

		search.value = '';
	} else {
		window.location.reload();
	}
});

// Get initial movies
getSimilarMovies();
