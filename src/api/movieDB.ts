import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'cc7115d720808396d9405056b6d8b2db',
        language: 'es-ES'
    }
})

export default movieDB