const initialState = {
    results: [],
    // info: {},
    count: 0,
    error: "",
    // someAddInfo: {},
    isLoading: false
}

export const CarActionTypes = {
    SET_CARS: "SET_CARS",
    ADD_CAR: "ADD_CAR",
    // DELETE_CAR: "DELETE_CAR",
    EDIT_CAR: "EDIT_CAR",
    SET_ERROR: "SET_ERROR",
    SET_IS_LOADING: "SET_IS_LOADING"
}

export const carsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CarActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case CarActionTypes.SET_CARS:
            return {
                ...state,
                results: action.payload,
                count: state.count + 1,
                isLoading: false
            };

        case CarActionTypes.SET_ERROR:
            return {
                error: action.payload.error
            };

        case CarActionTypes.ADD_CAR:
            return {
                ...state,
                results: action.payload,
            };

        // case CarActionTypes.DELETE_CAR:
        //     return {
        //         ...state,
        //         results: state
        //     };

        default:
            return state;

    }
};