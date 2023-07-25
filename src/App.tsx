import { useState } from "react";
import { Movie, WatchedMovie } from "./model/global";

const stubMovies = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: "2010",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    title: "The Matrix",
    year: "1999",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    title: "Parasite",
    year: "2019",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
] as Movie[];

const stubWatchedMovies = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: "2010",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    duration: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    title: "Back to the Future",
    year: "1985",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    duration: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
] as WatchedMovie[];

const average = (array: number[]) =>
  array.reduce((accumulator, value) => accumulator + value / array.length, 0);

export default function App() {
  const [query, setQuery] = useState(() => "");
  const [movies, setMovies] = useState<Movie[]>(() => stubMovies);
  const [watchedMovies, setWatchedMovies] = useState<WatchedMovie[]>(
    () => stubWatchedMovies,
  );
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [watchedIsOpen, setWatchedIsOpen] = useState<boolean>(true);

  const averageDuration = average(watchedMovies.map((movie) => movie.duration));
  const averageImdbRating = average(
    watchedMovies.map((movie) => movie.imdbRating),
  );
  const averageUserRating = average(
    watchedMovies.map((movie) => movie.userRating),
  );

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>

      <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          {isOpen && (
            <ul className="list">
              {movies?.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.poster} alt={`${movie.title} poster`} />
                  <h3>{movie.title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setWatchedIsOpen((open) => !open)}
          >
            {watchedIsOpen ? "–" : "+"}
          </button>
          {watchedIsOpen && (
            <>
              <div className="summary">
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

              <ul className="list">
                {watchedMovies.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.poster} alt={`${movie.title} poster`} />
                    <h3>{movie.title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.duration} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}
