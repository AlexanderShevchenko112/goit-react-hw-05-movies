import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'helpers/fetchMovies';

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

  return (
    <div>
      <h1>Movie Details</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h3>Movie ID: {movieId}</h3>
      <h3>Movie Title: {movie.title}</h3>
      <p>Movie Release Date: {movie.release_date}</p>
      {genres && (
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
      <p>Overview: {movie.overview}</p>
      <Link to={backLink.current}>Back to Movies</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
