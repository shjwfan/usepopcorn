import { FC, useMemo } from 'react';
import { average } from '../utils';

type Props = {
  watchedMovies: models.WatchedMovie[];
};

const WatchedMoviesSummary: FC<Props> = ({ watchedMovies: watchedMovies }) => {
  const averageDuration = useMemo(
    () => average(watchedMovies.map(movie => movie.duration)),
    [watchedMovies],
  );

  const averageImdbRating = useMemo(
    () => average(watchedMovies.map(movie => movie.imdbRating)),
    [watchedMovies],
  );

  const averageUserRating = useMemo(
    () => average(watchedMovies.map(movie => movie.userRating)),
    [watchedMovies],
  );

  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{averageImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{averageUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{averageDuration} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedMoviesSummary;
