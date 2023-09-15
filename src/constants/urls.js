import {authService} from "../services/authService";

const baseURL = process.env.REACT_APP_API

const films = "discover/movie";
const film = "movie";
const genres = "genre/movie/list"
const search = "search"
const api_key = authService.getKey()

const urls = {
    films: {
        all: films,
        byId: (id) => `${film}/${id}`,
        byPage: (pageNumber) => `${films}?page=${pageNumber}`,
    },
    genres: {
        base: genres,
        byGenre: (id) => `${films}?with_genres=${id}&api_key=${api_key}`
        // byName: (name)=> `?=${name}`
    },
    search: {
        byStr: (str) => `${search}/movie?query=${str}`
    }
}

export {
    baseURL,
    urls
}