import React from 'react';
import {FlatList} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {Movie} from '../../services/types';
import {MovieCardComponent} from './components/MovieCard';

export const HomeScreenComponent: React.FC = () => {
  const movies = useMovies();
  const renderMovieCard = ({item}: {item: Movie}) => {
    const {
      title,
      overview,
      posterImage,
      releaseDate,
      voteAverage,
      voteCount,
      genres,
    } = item;
    return (
      <MovieCardComponent
        title={title}
        posterImage={posterImage}
        genres={genres}
      />
    );
  };
  return (
    <FlatList<Movie>
      contentContainerStyle={{padding: 10}}
      data={movies}
      renderItem={renderMovieCard}
      keyExtractor={item => item.id}
    />
  );
};
