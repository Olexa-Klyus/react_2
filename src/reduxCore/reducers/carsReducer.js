import {CarActionTypes} from "../actions";

const initialState = {
    results: [],
    carForUpd: null,
    count: 0,
    isLoading: false
}

export const carsReducer = (state = initialState, action) => {

    switch (action.type) {

        case CarActionTypes.SET_CARS:
            return {
                ...state,
                results: action.payload,
                count: state.count + 1,
                isLoading: false
            };

        case CarActionTypes.EDIT_CAR:
            return {
                ...state,
                carForUpd: action.payload,
            }

        case CarActionTypes.ADD_CAR:
            return {
                ...state,
                results: action.payload,
            };

        default:
            return state;
    }
};