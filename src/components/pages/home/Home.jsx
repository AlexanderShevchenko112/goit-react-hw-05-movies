import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'helpers/fetchMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      getTrendingMovies()
        .then(data => setMovies(data))
        .catch(error => console.log('Error', error));
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies Today</h2>
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

export default Home;
