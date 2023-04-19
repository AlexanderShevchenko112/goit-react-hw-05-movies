import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from 'helpers/fetchMovies';
import css from 'components/pages/movies/Movies.module.css';
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
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link className={css.item} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      {movies.length === 0 && status === 'resolved' && (
        <h3>Nothing was found. Please try another search.</h3>
      )}
    </div>
  );
};

export default Movies;
