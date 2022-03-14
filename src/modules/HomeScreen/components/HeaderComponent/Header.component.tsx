import React from 'react';
import {TextInput, View} from 'react-native';

interface HeaderComponentProps {
  onMovieChange: (text: string) => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  onMovieChange,
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'grey',
        width: '100%',
        height: 25,
        borderRadius: 8,
        marginBottom: 10,
        padding: 5,
      }}>
      <TextInput placeholder={'Find movie'} onChangeText={onMovieChange} />
    </View>
  );
};
