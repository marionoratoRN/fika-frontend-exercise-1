export interface Movie {
  title: string;
  overview: string;
  posterImage: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  genres: Genre[];
  id: string;
}

export interface Genre {}
