import NoPhoto from '../../photo/NoPhoto.jpg';
import { Container, ImageWrap, Image, InfoText } from './MovieInfo.styled';

const baseImageURL = 'https://image.tmdb.org/t/p/w500';
const MovieInfo = ({
  details: {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres = [],
  },
}) => {
  return (
    <Container>
      <ImageWrap>
        <Image
          src={poster_path ? `${baseImageURL}${poster_path}` : NoPhoto}
          alt={title}
        />
      </ImageWrap>
      <div>
        <h1>
          {title} {release_date ? `${release_date.slice(0, 4)}` : ''}
        </h1>
        <InfoText>Users Score: {Math.round(vote_average * 10)}%</InfoText>
        <h3>Overview</h3>
        <InfoText>{overview}</InfoText>
        <h3>Genres</h3>
        <InfoText>
          {genres.length ? genres.map(el => el.name).join(', ') : 'no info'}
        </InfoText>
      </div>
    </Container>
  );
};

export default MovieInfo;
