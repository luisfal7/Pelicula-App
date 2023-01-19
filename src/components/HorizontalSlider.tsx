import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View style={{height: (title) ? 260 : 220}}>
      {title && <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:5}}>{title}</Text>}
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
