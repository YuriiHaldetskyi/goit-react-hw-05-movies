import { getMovieCast } from 'components/API';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem, Image } from './Cast.styled';
import NoPhoto from '../../photo/NoPhoto.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w500';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    setStatus('idle');
    getMovieCast(movieId)
      .then(data => {
        setCast(data.cast);
        setStatus('resolve');
      })
      .catch(error => {
        setCast([]);
        setStatus('rejected');
        setError(error);
      });
  }, [movieId]);

  return (
    <section>
      <h2>Cast</h2>
      {status === 'resolve' &&
        (cast.lenght !== 0 ? (
          <List>
            {cast.map(item => {
              return (
                <ListItem key={item.id}>
                  <Image
                    src={
                      item.profile_path
                        ? `${baseImageURL}${item.profile_path}`
                        : NoPhoto
                    }
                    alt={item.original_name}
                  />
                  <h4>{item.name}</h4>
                  <p>Character: {item.character}</p>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <p> Sorry, no info about cast's </p>
        ))}
      {status === 'idle' && <Loader />}
      {status === 'rejected' && <p>{error}</p>}
    </section>
  );
};

export default Cast;
