import { FC } from 'react';

type Props = {
  watchedMovie: models.WatchedMovie;
};

const WatchedMoviesItem: FC<Props> = ({ watchedMovie }) => {
  return (
    <li key={watchedMovie.imdbID}>
      <img src={watchedMovie.poster} alt={`${watchedMovie.title} poster`} />
      <h3>{watchedMovie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{watchedMovie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{watchedMovie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watchedMovie.duration} min</span>
        </p>
      </div>
    </li>
  );
};

export default WatchedMoviesItem;
