import { FC, useState } from 'react';
import {
  CloseableBox,
  List,
  Logo,
  Movie,
  NavBar,
  Search,
  SearchResults,
  WatchedMovie,
  WatchedMovieSummary,
} from './components';

const moviesStub = [
  {
    imdbId: 'tt1375666',
    title: 'Inception',
    year: '2010',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbId: 'tt0133093',
    title: 'The Matrix',
    year: '1999',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbId: 'tt6751668',
    title: 'Parasite',
    year: '2019',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
] as models.Movie[];

const watchedMoviesStub = [
  {
    imdbId: 'tt1375666',
    title: 'Inception',
    year: '2010',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    duration: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbId: 'tt0088763',
    title: 'Back to the Future',
    year: '1985',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    duration: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
] as models.WatchedMovie[];

const App: FC = () => {
  const [movies] = useState<models.Movie[]>(() => moviesStub);
  const [watchedMovies] = useState<models.WatchedMovie[]>(
    () => watchedMoviesStub,
  );

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <SearchResults resultsNumber={movies.length} />
      </NavBar>
      <main className='main'>
        <CloseableBox>
          <List>
            {movies.map(movie => (
              <Movie movie={movie} />
            ))}
          </List>
        </CloseableBox>
        <CloseableBox>
          <WatchedMovieSummary watchedMovies={watchedMovies} />
          <List>
            {watchedMovies.map(watchedMovie => (
              <WatchedMovie watchedMovie={watchedMovie} />
            ))}
          </List>
        </CloseableBox>
      </main>
    </>
  );
};

export default App;
