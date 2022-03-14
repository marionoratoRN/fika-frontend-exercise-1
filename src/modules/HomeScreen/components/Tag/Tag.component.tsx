import React from 'react';
import {Text, View} from 'react-native';

interface GenresComponentProps {
  genres: (string | undefined)[];
}

export const TagComponent: React.FC<GenresComponentProps> = ({genres}) => {
  return (
    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
      {genres.map(genre => {
        return (
          <View
            style={{
              backgroundColor: 'grey',
              padding: 4,
              marginRight: 5,
              borderRadius: 5,
              marginBottom: 5,
            }}
            key={genre}>
            <Text style={{color: 'white', fontSize: 12}}>{genre}</Text>
          </View>
        );
      })}
    </View>
  );
};
