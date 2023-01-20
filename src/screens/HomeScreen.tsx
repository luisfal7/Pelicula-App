import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, topRated, popular, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator animating size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        <HorizontalSlider movies={topRated} title="top rated" />
        <HorizontalSlider movies={popular} title="popular" />
        <HorizontalSlider movies={upcoming} title="upcoming" />
      </View>
    </ScrollView>
  );
};
