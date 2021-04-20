const API_KEY = 'c25ebaf6293a1c0f487f895e7bb10cf3';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;
const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const noResultsSection = document.getElementById('no-results-section');

// Get initial movies
getMovies(TOP_RATED);

async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	showMovies(data.results);
	showNoResults(data.results.length);
}

function showMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview, id } = movie;

		const movieElement = document.createElement('div');
		movieElement.classList.add('movie');
		movieElement.innerHTML = `
		<a onclick="movieSelected('${id}')" target="_blank"><img src="${IMG_PATH + poster_path}" alt="${title}" /></a>
      
      <div class="movie-info">
          <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      
      <div class="overview">
         <h3>Overview</h3>
         <a onclick="movieSelected('${id}')" target="_blank"><p>${overview}</p></a>
      </div>
    `;

		main.appendChild(movieElement);

		overviewTxt = document.getElementsByClassName('overview');
	});
}

function showNoResults(data) {
	noResultsSection.innerHTML = '';

	if (data === 0) {
		let noResults = document.createElement('div');
		noResults.classList.add('no-results');
		noResults.innerHTML = `<h3 ><i class="far fa-sad-cry"></i> <span>No Movies Found. Try a different movie!</span></h3>`;

		noResultsSection.appendChild(noResults);
	}
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

function movieSelected(id) {
	sessionStorage.setItem('movieId', id);
	window.location = 'moviePage.html';
	return false;
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_URL + searchTerm);

		search.value = '';
	} else {
		window.location.reload();
	}
});
