const API_KEY = 'c4018622b4e004039a1f5b78df8394b2';

export const getTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    })
    .then(data => data.results);
};

export const searchMovies = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    })
    .then(data => data.results);
};

export const getMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Response was not ok.');
    }
  });
};

export const getMovieCredits = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    })
    .then(data => data.cast);
};

export const getMovieReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    })
    .then(data => data.results);
};
