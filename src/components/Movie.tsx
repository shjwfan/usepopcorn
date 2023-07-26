import { FC } from 'react';

type Props = {
  movie: models.Movie;
};

const Movie: FC<Props> = ({ movie }) => {
  return (
    <li key={movie.imdbId}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
