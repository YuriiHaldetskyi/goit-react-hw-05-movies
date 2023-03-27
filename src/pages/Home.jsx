import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../components/API';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { Title, Main } from './Home.styled';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    setStatus('loading');
    getTrendingMovies()
      .then(data => {
        setMovie(data.results);
        setStatus('resolve');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>
      <MovieList movies={movie} />
      {status === 'idle' && <Loader />}
      {status === 'rejected' && <h2>{error}</h2>}
    </Main>
  );
};

export default Home;
