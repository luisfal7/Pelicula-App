import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View } from 'react-native';

export const HomeScreen = () => {

  const navigation= useNavigation()

  return (
    <View>
        <Text>
            Home screen
        </Text>
    </View>
  )
}
