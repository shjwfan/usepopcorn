import { FC, useEffect, useState } from 'react';
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
import ErrorMessage from './components/ErrorMessage.tsx';

const API_KEY = '2d3b32b2';

const App: FC = () => {
  const [query, setQuery] = useState<string>(() => '');
  const [movies, setMovies] = useState<models.Movie[]>(() => []);
  const [watchedMovies] = useState<models.WatchedMovie[]>(() => []);
  const [isLoading, setIsLoading] = useState<boolean>(() => false);
  const [errorMessage, setErrorMessage] = useState<string | null>(() => null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Fetch movies failure');
        }

        const data = await response.json();
        if (data.Search) {
          const movies = (data.Search as any[]).map(obj => {
            const poster = obj.Poster as string;
            return {
              imdbID: obj.imdbID as string,
              title: obj.Title as string,
              year: obj.Year as string,
              poster: poster !== 'N/A' ? poster : '/no-image-available.png',
            } as models.Movie;
          });
          setMovies(movies);
        } else {
          throw new Error('Fetch movies failure, movies not found');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setErrorMessage(null);
      return;
    }

    void fetchMovies();
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <SearchResults resultsNumber={movies.length} />
      </NavBar>
      <main className='main'>
        <CloseableBox>
          {isLoading && <p className='loader'>Loading...</p>}
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          <List>
            {!isLoading &&
              !errorMessage &&
              movies.map(movie => (
                <div key={movie.imdbID}>
                  <Movie movie={movie} />
                </div>
              ))}
          </List>
        </CloseableBox>
        <CloseableBox>
          <WatchedMovieSummary watchedMovies={watchedMovies} />
          <List>
            {watchedMovies.map(watchedMovie => (
              <div key={watchedMovie.imdbID}>
                <WatchedMovie watchedMovie={watchedMovie} />
              </div>
            ))}
          </List>
        </CloseableBox>
      </main>
    </>
  );
};

export default App;
