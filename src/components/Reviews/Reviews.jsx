import { getMovieReviews } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    setStatus('idle');
    getMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
        setStatus('resolve');
      })
      .catch(error => {
        setReviews([]);
        setStatus('rejected');
        setError(error);
      });
  }, [movieId]);

  return (
    <section>
      <h2>Reviews</h2>
      {status === 'resolve' &&
        (reviews.lenght !== 0 ? (
          <ul>
            {reviews.map(item => {
              return (
                <li key={item.id}>
                  <h4>Author: {item.author || '?'}</h4>
                  <p>{item.content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p> Sorry, no info about reviews </p>
        ))}
      {status === 'idle' && <Loader />}
      {status === 'rejected' && <p>{error}</p>}
    </section>
  );
};

export default Reviews;
