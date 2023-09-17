import {apiService} from "./apiService";

import {urls} from "../constants";

const filmService = {
    getAll: (page, size) => apiService.get(urls.films.all(page, size)),
    getById: (id)=> apiService.get(urls.films.byId(id)),
    // getByPage: (pageNumber)=> apiService.get(urls.films.byPage(pageNumber))
}

export {
    filmService
}