import axios from 'axios';
import config from 'react-native-config';

interface GenreResponse {
  id: number;
  name: string;
}

interface MovieResponse {
  genre_ids: number[];
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const apiKey = config.API_KEY;

class MovieService {
  getMovies: () => Promise<MovieResponse[] | undefined> = async () => {
    try {
      const {data} = await instance.get<{results: MovieResponse[]}>(
        'discover/movie',
        {
          params: {
            api_key: apiKey,
            language: 'en-US',
            page: '1',
            include_adult: false,
          },
        },
      );
      return data?.results;
    } catch (e) {
      console.log('Error fetching the movies', e);
    }
  };

  getGenres: () => Promise<GenreResponse[] | undefined> = async () => {
    try {
      const {data} = await instance.get<{genres: GenreResponse[]}>(
        'genre/movie/list',
        {
          params: {
            api_key: apiKey,
            language: 'en-US',
          },
        },
      );
      return data?.genres;
    } catch (e) {
      console.log('Error fetching the genres', e);
    }
  };
}

export default new MovieService();
