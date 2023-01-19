import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();

  if (false) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator animating size="large" color="#00ff00"/>
      </View>
    );
  }

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};
