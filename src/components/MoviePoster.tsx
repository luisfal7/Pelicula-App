import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity , View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 430, width = 300}: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate<string>('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal:5,
    }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    margin: 2,
    borderRadius: 18,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex:1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 10,
  },
});
