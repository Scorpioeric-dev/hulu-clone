import axios from 'axios'

//allows the base url already defined for future axios calls to database
const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default instance