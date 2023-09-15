import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";

import {filmService} from "../../services";


const initialState = {
    films: [],
    film: {},
    page: 0,
    next: null,
    prev: null,
    errors: null,
}

const getAllFilms = createAsyncThunk(
    "filmsSlice/getAllFilms",
    async (_, thunkAPI) => {
        try {
            const {data} = await filmService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getFilmInfo =  createAsyncThunk(
    "filmsSlice/getFilmInfo",
    async (id, thunkAPI) => {
        try {
            const {data} = await filmService.getById(id);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState,
    reducers: {
        // getAll: (state, action)=> {
        //     state.films = action.payload
        // }
    },
    extraReducers: builder => builder
        .addCase(getAllFilms.fulfilled, (state, action) => {
            state.films = action.payload.results
            state.page = action.payload.page
            state.next = action.payload.next
            state.prev = action.payload.prev
        })
        .addCase(getFilmInfo.fulfilled, (state, action)=> {
            state.film = action.payload
            console.log(action.payload)
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