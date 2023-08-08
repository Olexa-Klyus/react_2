const initialState = {
    results: [],
    info: {},
    count: 0,
    error: "",
    someAddInfo: {},
    isLoading: false
    // and any custom information
}

export const UserActionTypes = {
    SET_USERS: "SET_USERS",
    ADD_USER: "ADD_USER",
    DELETE_USER: "DELETE_USER",
    SET_ERROR: "SET_ERROR",
    SET_IS_LOADING: "SET_IS_LOADING"
}

export const usersReducer = (state = initialState, action) => { // action=payload+type

    switch (action.type) {
        case UserActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case UserActionTypes.SET_USERS:
            return {
                ...state,
                results: action.payload.results,
                info: action.payload.info,
                count: state.count + 1,
                isLoading: false
            };

        case UserActionTypes.SET_ERROR:
            return {
                error: action.payload.error
            };

        case UserActionTypes.ADD_USER:
            return {};

        case UserActionTypes.DELETE_USER:
            return {};

        default:
            return state;

    }
};