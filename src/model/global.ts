export type Movie = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
};

export type WatchedMovie = Movie & {
  duration: number;
  imdbRating: number;
  userRating: number;
};
