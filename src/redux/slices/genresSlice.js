import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";

import {genreService} from "../../services/genreService";

const initialState = {
    genres: [],
    genre: 0,
    arrayResult: [],
    errors: null,
    page: 1
}

const getGenres = createAsyncThunk(
    "genresSlice/getGenres",
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll()
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const oneGenreFilms = createAsyncThunk(
    "genresSlice/oneGenreFilms",
    async (id, thunkAPI) => {
        try {
            const {data} = await genreService.getOne(id)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const genresSlice = createSlice({
        name: "genresSlice",
        initialState,
        reducers: {},
        extraReducers: builder => builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(oneGenreFilms.fulfilled, (state, action) => {
                state.arrayResult = action.payload.results;
                state.genre = action.payload.genre;
                state.page = action.payload.page;
            })
            .addMatcher(isRejected(), (state, action) => {
                state.errors = action.payload
            })
    }
);

const {reducer: genresReducer, actions} = genresSlice;

const genresActions = {
    ...actions,
    getGenres,
    oneGenreFilms,
}

export {
    genresReducer,
    genresActions
};