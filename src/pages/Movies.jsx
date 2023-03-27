import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../components/API';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { AiOutlineSearch } from 'react-icons/ai';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    setStatus('idle');
    getSearchMovies(query)
      .then(data => {
        setMovies(data.results);
        setStatus('resolve');
      })
      .catch(err => {
        setMovies([]);
        setError(String(err));
        setStatus('rejected');
      });
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.currentTarget.elements.search.value.trim();
    setSearchParams(query ? { query } : {});
  };

  return (
    <main>
      <h1>Movie</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <MovieList movies={movies} />
      {status === 'idle' && <Loader />}
      {status === 'rejected' && <p>{error}</p>}
    </main>
  );
};

export default Movies;
