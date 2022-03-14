export interface Movie {
  title: string;
  overview: string;
  posterImage: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  genres: (string | undefined)[];
  id: string;
}
