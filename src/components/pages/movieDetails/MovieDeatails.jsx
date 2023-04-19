import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'helpers/fetchMovies';
import css from 'components/pages/movieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log('Error', error));
  }, [movieId]);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? `/movies`);

  const genres = movie.genres;
  const releaseDate = movie.release_date;

  return (
    <div className={css.section}>
      <Link className={css.backLink} to={backLink.current}>
        Go back
      </Link>
      <h1 className={css.title}>Movie Details</h1>
      <div className={css.posterSection}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
          />
        )}
        <div>
          <h3 className={css.subTitle}>
            Movie Title: <span className={css.text}>{movie.title}</span>{' '}
          </h3>
          <div className={css.dateSection}>
            <h3 className={css.subTitle}>Release year:</h3>
            {releaseDate && (
              <p className={css.text}>{releaseDate.split('-')[0]}</p>
            )}
          </div>
          {genres && (
            <>
              <h3 className={css.subTitle}>Genres:</h3>
              <ul>
                {genres.map(genre => (
                  <li className={css.text} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <h3 className={css.subTitle}>Overview:</h3>
      <p className={css.text}> {movie.overview}</p>

      <ul>
        <li>
          <Link className={css.item} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.item} to="reviews">
            Review
          </Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
