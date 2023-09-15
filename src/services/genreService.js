import {apiService} from "./apiService";

import {urls} from "../constants";

const genreService = {
    getAll: ()=> apiService.get(urls.genres.base),
    getOne: (id) => apiService.get(urls.genres.byGenre(id)),
}

export {
    genreService
};