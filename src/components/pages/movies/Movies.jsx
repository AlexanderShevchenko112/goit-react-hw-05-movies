import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from 'helpers/fetchMovies';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    if (query === '') {
      return;
    }
    searchMovies(query)
      .then(data => setMovies(data))
      .catch(error => console.log('Error', error));
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter movie title..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
