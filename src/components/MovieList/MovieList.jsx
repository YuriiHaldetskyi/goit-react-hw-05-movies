import { Link, useLocation } from 'react-router-dom';
import { List } from './MovieList.styled';
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </List>
  );
};
export default MovieList;
