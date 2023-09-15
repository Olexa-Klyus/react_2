import {apiService} from "./apiService";

import {urls} from "../constants";

const searchService = {
    getAll: (str) => apiService.get(urls.search.byStr(str))
}

export {
    searchService
};