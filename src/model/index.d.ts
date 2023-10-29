namespace models {
  type Movie = {
    imdbID: string;
    title: string;
    year: string;
    poster: string;
  };

  type WatchedMovie = Movie & {
    duration: number;
    imdbRating: number;
    userRating: number;
  };
}
