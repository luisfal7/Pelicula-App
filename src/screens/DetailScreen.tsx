import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/Navigation';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{margin: 10}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginBottom: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
