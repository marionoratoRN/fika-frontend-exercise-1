import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {TagComponent} from '../Tag';

interface MovieCardComponentProps {
  title: string;
  genres: (string | undefined)[];
  posterImage: string;
}

export const MovieCardComponent: React.FC<MovieCardComponentProps> = ({
  title,
  genres,
  posterImage,
}) => {
  return (
    <ImageBackground
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        height: 250,
        marginBottom: 10,
      }}
      source={{uri: posterImage}}>
      <View
        style={{
          backgroundColor: '#00000090',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          padding: 10,
        }}>
        <Text style={{color: 'white', fontSize: 21, marginBottom: 10}}>{title}</Text>
        <TagComponent genres={genres} />
      </View>
    </ImageBackground>
  );
};
