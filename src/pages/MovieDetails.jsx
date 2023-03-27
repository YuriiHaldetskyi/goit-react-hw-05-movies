import { useEffect, useState, useRef, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'components/API';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { FiArrowLeft } from 'react-icons/fi';
import { StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('idle');
    getMovieDetails(movieId)
      .then(data => {
        setDetails(data);
        setStatus('resolve');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, [movieId]);

  return (
    <main>
      <StyledLink to={backLink.current}>
        <FiArrowLeft size="20" /> Go back
      </StyledLink>
      {details && <MovieInfo details={details} />}
      {status === 'idle' && <Loader />}
      {status === 'rejected' && <h2>{error}</h2>}

      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
