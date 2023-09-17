import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";

import {filmService} from "../../services";


const initialState = {
    films: [],
    film: {},
    page: 0,
    total_pages: 0,
    next: null,
    prev: null,
    errors: null,
    trigger: null
}

const getAllFilms = createAsyncThunk(
    "filmsSlice/getAllFilms",
    async ({page, size}, thunkAPI) => {
        try {
            console.log("hello")
            const {data} = await filmService.getAll(page, size);
            console.log("hello")
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getFilmInfo = createAsyncThunk(
    "filmsSlice/getFilmInfo",
    async (id, thunkAPI) => {
        try {
            const {data} = await filmService.getById(id);
            console.log(data)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllFilms.fulfilled, (state, action) => {
            state.films = action.payload.results
            state.page = action.payload.page
            state.next = action.payload.next
            state.prev = action.payload.prev
            state.total_pages = action.payload.total_pages
            console.log(state.total_pages, state.page)
        })
        .addCase(getFilmInfo.fulfilled, (state, action) => {
            state.film = action.payload
        })
        .addMatcher(isRejected(), (state, action) => {
            state.errors = action.payload
        })
});

const {reducer: filmsReducer, actions} = filmsSlice;

const filmsActions = {
    ...actions,
    getAllFilms,
    getFilmInfo
}
export {
    filmsReducer,
    filmsActions,
};