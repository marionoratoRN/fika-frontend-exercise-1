import {useEffect, useState} from 'react';
import MovieService from '../services/MovieService';
import {Movie} from '../services/types';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[] | undefined>();
  useEffect(() => {
    const getMovies = async () => {
      const genres = await MovieService.getGenres();
      const genresObject: {[id: string]: string} = {};
      genres?.forEach(genre => {
        genresObject[genre.id] = genre.name;
      });
      const moviesResponse = await MovieService.getMovies();
      const tranformedMovies: Movie[] | undefined = moviesResponse?.map(
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
          const refactoredGenres = genre_ids.map(genre => genresObject[genre]);
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
      setMovies(tranformedMovies);
    };
    getMovies();
  }, []);
  return movies;
};
