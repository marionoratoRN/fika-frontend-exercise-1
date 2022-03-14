import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {Movie} from '../../services/types';
import {MovieCardComponent} from './components/MovieCard';
import {HeaderComponent} from './components/HeaderComponent';

export const HomeScreenComponent: React.FC = () => {
  const {movies, setQuery} = useMovies();
  const renderMovieCard = ({item}: {item: Movie}) => {
    const {title, posterImage, genres} = item;
    return (
      <MovieCardComponent
        title={title}
        posterImage={posterImage}
        genres={genres}
      />
    );
  };
  return (
    <View style={{padding: 10}}>
      <HeaderComponent onMovieChange={setQuery} />
      <FlatList<Movie>
        data={movies}
        renderItem={renderMovieCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
