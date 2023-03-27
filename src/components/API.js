import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = `36a3ac5838410dde3857f90e0e3f465d`;

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );
  return response.data;
}

export async function getSearchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}`
  );
  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`
  );
  return response.data;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data;
}
