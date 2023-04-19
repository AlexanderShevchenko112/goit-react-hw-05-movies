import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'helpers/fetchMovies';
import css from 'components/reviews/Reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => console.log('Error', error));
  }, [movieId]);

  return (
    <div>
      <h2 className={css.subTitle}>Movie Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3 className={css.subTitle}>{review.author}</h3>
            {review.content ? (
              <p className={css.text}>{review.content}</p>
            ) : (
              <p>We don't have any reviews for this movie</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
