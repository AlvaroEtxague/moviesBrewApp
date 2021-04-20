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

// Get movie
async function getMovie() {
	let movieId = sessionStorage.getItem('movieId');

	const response = await fetch(MOVIE_URL + movieId + '?api_key=' + API_KEY);
	const data = await response.json();

	showMovie(data);
	console.log(data);
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
						<img src="${IMG_PATH + poster_path}" alt="${title}" />
				</div>  
			</div>

			<div class="col2">
				<div class="movie-info">
						<h2>${title}</h2>
						<div class="user-score">
							<span class="rating ${getClassByRate(vote_average)}">${vote_average}</span>
							<span class="user-score">User Score</span>
							<span><i class="fa fa-heart" aria-hidden="true"></i></span>
							<span><i class="fa fa-bookmark" aria-hidden="true"></i></span>
							<span><i class="fa fa-star" aria-hidden="true"></i></span>
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

async function getSimilarMovies() {
	let movieId = sessionStorage.getItem('movieId');

	const response = await fetch(MOVIE_URL + movieId + '/similar?api_key=' + API_KEY);
	const data = await response.json();

	showSimilarMovies(data.results);
	console.log(data);
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

// get movies
async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	showMovies(data.results);
	console.log(data.results);
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
