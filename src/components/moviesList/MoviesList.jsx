import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from 'pages/home/Home.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            state={{ from: location }}
            className={css.item}
            to={`/movies/${movie.id}`}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
