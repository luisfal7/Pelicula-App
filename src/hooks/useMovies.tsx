import React, {useState, useEffect} from 'react';
import { Movie, MovieDBNowResponse } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upcoming: Movie[],
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [movieState, setmovieState] = useState<MoviesState>({
      nowPlaying:[],
      popular:[],
      topRated:[],
      upcoming:[],
    });

  const getMovies = async () => {

    const nowPlaying = movieDB.get<MovieDBNowResponse>('/now_playing');
    const popular = movieDB.get<MovieDBNowResponse>('/popular');
    const topRated = movieDB.get<MovieDBNowResponse>('/top_rated');
    const upcoming = movieDB.get<MovieDBNowResponse>('/upcoming');

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,    
    ])

    setmovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    })

    setIsLoading(false)
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movieState,
    isLoading
  };
};
