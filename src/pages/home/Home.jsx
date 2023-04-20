import { useEffect, useState } from 'react';
import MoviesList from 'components/moviesList/MoviesList';
import { getTrendingMovies } from 'helpers/fetchMovies';
import css from 'pages/home/Home.module.css';
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
    <div className={css.section}>
      <h2 className={css.title}>Trending Movies Today</h2>
      <MoviesList movies={movies}></MoviesList>
    </div>
  );
};

export default Home;
