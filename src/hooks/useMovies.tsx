import React, {useState, useEffect} from 'react';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine(resp.data.results);
    setIsLoading(false)
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading
  };
};
