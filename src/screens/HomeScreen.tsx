import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Text, View, ActivityIndicator, Dimensions} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window')

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets()

  if (false) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator animating size="large" color="#00ff00"/>
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <Text>Home screen</Text>
      
      <Carousel 
        data={peliculasEnCine}
        renderItem={({item}: any) => <MoviePoster movie={ item } />}
        sliderWidth={ windowWidth }
        itemWidth={ 300 }
      />

    </View>
  );
};
