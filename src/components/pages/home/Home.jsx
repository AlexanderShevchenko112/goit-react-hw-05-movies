import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'helpers/fetchMovies';
import css from 'components/pages/home/Home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchTrendingMovies = () => {
      getTrendingMovies()
        .then(data => setMovies(data))
        .catch(error => console.log('Error', error));
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.section}>
      <h2 className={css.title}>Trending Movies Today</h2>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              className={css.item}
              state={{ from: location }}
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
