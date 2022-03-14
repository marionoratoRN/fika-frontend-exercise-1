import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useMovies} from './hooks/useMovies';

const App = () => {
  const movies = useMovies();
  console.log('movies', movies);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <SafeAreaView style={backgroundStyle} />;
};

export default App;
