import {UserActionTypes} from "../reducers/usersReducer";

export const userActions = {
    setUsers: (data) => ({type:UserActionTypes.SET_USERS, payload:data}),
    setError: (data) => ({type: UserActionTypes.SET_ERROR, payload: data}),
    setIsLoading: (isLoading) =>({type: UserActionTypes.SET_IS_LOADING, payload:isLoading})
}