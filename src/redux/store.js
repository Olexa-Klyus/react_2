import {configureStore} from "@reduxjs/toolkit";

import {filmsReducer} from "./slices/filmsSlice";
import {genresReducer} from "./slices/genresSlice";
import {searchReducer} from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        films: filmsReducer,
        genres: genresReducer,
        search: searchReducer
    }
});

export {
    store
};