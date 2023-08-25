import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    isLoading: false
}

// AsyncThunk зазвичай пишуть перед createSlice; цей наш async thunk і є action-ом, який повертає payload
const all = createAsyncThunk(
    "carsSlice/all",
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    "carsSlice/create",
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(all()); // завантажуємо знов усі cars, окрім того, що створили нове авто
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const update = createAsyncThunk(
    "carsSlice/update",
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
            thunkAPI.dispatch(all())

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    "carsSlice/deleteCar",
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(all())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const carsSlice = createSlice({
    name: "carsSlice",
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },

    // варіант 1 extraReducers:
    // extraReducers: { // extraReducers - необов'язковий ключ, але коли є async thunk, то потрібен
    //     [all.fulfilled]: (state, action) => {
    //         state.cars = action.payload;
    //         state.isLoading = false;
    //     },
    //     [all.pending]: (state) => { // під час завантаження (поки триває запит)
    //         state.isLoading = true;
    //     },
    //     [create.fulfilled]: (state) => {
    //     }
    // }

    // варіант 2 extraReducers:
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.cars = action.payload
                state.isLoading = false;
            })
            .addCase(all.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(create.fulfilled, (state) => {
            })
            .addCase(update.fulfilled, (state) => {
                state.carForUpdate = null;
            })
            .addCase(deleteCar.fulfilled, state => {
            })

            .addMatcher(isFulfilled(), state => { // addMatcher додає зразу для всіх fulfilled,тобто не треба розписувати для кожного thunk. Або в дужках можна вказати, для яких саме випадків треба.
                state.isLoading = false;
                state.errors = null;
            })
            .addMatcher(isPending(), state => {
                state.isLoading = true;
                state.errors = null;
            })
            .addMatcher(isRejected(), (state, action)=>{
                state.isLoading = false;
                state.errors = action.payload
            })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carsSlice;

const carActions = {
    all,
    create,
    setCarForUpdate, // вичавили його з action-ів, які повертає carsSlice
    update,
    deleteCar
};

export {
    carReducer,
    carActions
}