import React, { useState } from 'react';
import { searchMovies } from 'helpers/fetchMovies';
import css from 'pages/movies/Movies.module.css';
import MoviesList from 'components/moviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleSearch = () => {
    if (query === '') {
      return;
    }
    searchMovies(query)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log('Error', error);
        setStatus('rejected');
      });
  };

  return (
    <div className={css.section}>
      <h2 className={css.title}>Search Movies</h2>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter movie title..."
      />
      <button className={css.button} onClick={handleSearch}>
        Search
      </button>
      <MoviesList movies={movies}></MoviesList>
      {movies.length === 0 && status === 'resolved' && (
        <h3>Nothing was found. Please try another search.</h3>
      )}
    </div>
  );
};

export default Movies;
