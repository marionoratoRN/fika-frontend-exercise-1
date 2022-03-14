import {useEffect, useState} from 'react';
import MovieService, {MovieResponse} from '../services/MovieService';
import {Movie} from '../services/types';

const getTransformedMovies = (
  movies?: MovieResponse[],
  genresObject?: {[id: string]: string},
) => {
  return movies?.map(
    ({
      id,
      title,
      overview,
      poster_path,
      vote_average,
      vote_count,
      genre_ids,
      release_date,
    }) => {
      const refactoredGenres = genre_ids.map(genre => genresObject?.[genre]);
      return {
        id: String(id),
        title,
        overview,
        posterImage: `https://image.tmdb.org/t/p/w500/${poster_path}`,
        voteAverage: vote_average,
        voteCount: vote_count,
        genres: refactoredGenres,
        releaseDate: release_date,
      };
    },
  );
};

export const useMovies = () => {
  const [query, setQuery] = useState('');
  const [genres, setGenres] = useState<{[id: string]: string}>();
  const [movies, setMovies] = useState<Movie[] | undefined>();
  useEffect(() => {
    const getMovies = async () => {
      const genresResponse = await MovieService.getGenres();
      const genresObject: {[id: string]: string} = {};
      genresResponse?.forEach(genre => {
        genresObject[genre.id] = genre.name;
      });
      setGenres(genresObject);
      const moviesResponse = await MovieService.getMovies();
      const tranformedMovies: Movie[] | undefined = getTransformedMovies(
        moviesResponse,
        genresObject,
      );
      setMovies(tranformedMovies);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const findMovies = async () => {
      const findMoviesResponse = await MovieService.findMovies(query);
      const tranformedMovies: Movie[] | undefined = getTransformedMovies(
        findMoviesResponse,
        genres,
      );
      setMovies(tranformedMovies);
    };
    if (query !== '') {
      findMovies();
    }
  }, [query]);

  return {movies, setQuery};
};
