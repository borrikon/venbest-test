import {initialState} from "../initialState";
import {
    FILTER_USERS_BY_AGE,
    FILTER_USERS_BY_LASTNAMES,
    FILTER_USERS_BY_NAMES, FILTER_USERS_BY_SEX,
    GET_DATA_FAILURE,
    GET_DATA_STARTED,
    GET_DATA_SUCCESS
} from "../types";


export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DATA_STARTED: return { ...state, loading: true}
        case GET_DATA_SUCCESS: return { ...state, users: state.users.concat(action.payload), loading: false}
        case GET_DATA_FAILURE: return { ...state, loading: false, error: action.payload}
        case FILTER_USERS_BY_NAMES: return {
            ...state,
            filteredArray: state.users.filter(item => (
                item.name.toLowerCase().indexOf(action.payload) + 1
            ))}
        case FILTER_USERS_BY_LASTNAMES: return {
            ...state,
            filteredArray: state.users.filter(item => (
                item.lastname.toLowerCase().indexOf(action.payload) + 1
            ))}
        case FILTER_USERS_BY_AGE: return {
            ...state,
            filteredArray: state.users.filter(item => (
                item.age === +action.payload
            ))
        }
        case FILTER_USERS_BY_SEX: return {
            ...state,
            filteredArray: state.users.filter(item => {
                return item.sex === action.payload
            })}
        default: return state
    }
}