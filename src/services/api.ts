import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_MOVIEDB_JWT_TOKEN}`,
        "accept": "application/json"
    }
})

export default api;