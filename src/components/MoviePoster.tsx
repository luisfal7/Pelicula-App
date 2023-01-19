import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  return (
    <View style={{
      width: 300,
      height: 430,
    }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
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
    width: 300,
    height: 410,
    borderRadius: 18,
    shadowColor: '#f0f',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 10,
  },
});
