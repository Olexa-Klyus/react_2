import {apiService} from "./apiService";

import {urls} from "../constants";

const filmService = {
    getAll: ()=> apiService.get(urls.films.all),
    getById: (id)=> apiService.get(urls.films.byId(id)),
    getByPage: (pageNumber)=> apiService.get(urls.films.byPage(pageNumber))
}

export {
    filmService
}