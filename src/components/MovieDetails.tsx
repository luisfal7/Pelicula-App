import React from 'react'
import currencyFormatter from 'currency-formatter'
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props ) => {
  return (
    <>
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection:'row' }}> 
                <Icon 
                    name='star-outline'
                    color='grey'
                    size={16}
                    style={{alignSelf:'center'}}
                />

                <Text style={{ marginLeft: 5 }}>{movieFull.vote_average}</Text>

                <Text style={{ marginLeft: 5 }}>
                    - { movieFull.genres.map( g => g.name ).join(', ') }
                </Text>
            </View>

            <Text style={{ fontSize:23, marginTop:2, fontWeight:'bold' }}>
                Historia
            </Text>

            <Text style={{fontSize: 14, textAlign:'left'}}>
                { movieFull.overview }
            </Text>

            <Text style={{ fontSize:23, marginTop:2, fontWeight:'bold' }}>
                Presupuesto
            </Text>

            <Text>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>

        </View>
    </>
  )
}
