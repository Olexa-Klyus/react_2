import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {searchService} from "../../services/searchService";

const initialState = {
    films: [],
    // errors: null,
    page: 1
}


const searchThunk = createAsyncThunk(
    "searchSlice/searchThunk",
    async (str, thunkAPI) => {
        try {
            const {data} = await searchService.getAll(str)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const searchSlice = createSlice({
        name: "searchSlice",
        initialState,
        reducers: {},
        extraReducers: builder => builder
            .addCase(searchThunk.fulfilled, (state, action) => {
                state.films = action.payload.results;
                state.page = action.payload.page;
            })
            // .addMatcher(isRejected(), (state, action) => {
            //     state.errors = action.payload.errors
            // })
    }
);

const {reducer: searchReducer, actions} = searchSlice;

const searchActions = {
    ...actions,
    searchThunk
};

export {
    searchReducer,
    searchActions
}