import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'helpers/fetchMovies';
import defaultImg from 'components/cast/defaultImg.jpg';
import css from 'components/cast/Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCast(data))
      .catch(error => console.log('Error', error));
  }, [movieId]);

  return (
    <div>
      <h2 className={css.subTitle}>Movie Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width="100"
            />

            <h3 className={css.subTitle}>{actor.name}</h3>
            <p className={css.text}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
