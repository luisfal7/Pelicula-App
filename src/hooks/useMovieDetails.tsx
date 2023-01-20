import React, {useState, useEffect} from 'react'
import movieDB from '../api/movieDB'
import { MovieFull } from '../interfaces/movieInterface'

interface MovieDetails {
    isLoading: boolean;
    MovieFull: MovieFull;
    cast: any[]
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>()

    const getMovieDetails = async () => {
        const resp = await movieDB.get<MovieFull>(`/${movieId}`)
    }

    useEffect(() => {
      
    getMovieDetails()

    }, [])

    return{
        state
    }
    
}
