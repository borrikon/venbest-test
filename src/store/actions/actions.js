import {
    FILTER_USERS_BY_AGE,
    FILTER_USERS_BY_LASTNAMES,
    FILTER_USERS_BY_NAMES, FILTER_USERS_BY_SEX,
    GET_DATA_FAILURE,
    GET_DATA_STARTED,
    GET_DATA_SUCCESS
} from "../types";
import axios from 'axios';
import {URL} from '../../helper';

export function getUsersData() {
    return dispatch => {
        dispatch(getUsersDataStarted());
        console.log('work')
        axios
            .get(URL)
            .then(res => {
                dispatch(getUsersDataSuccess(res.data))
            })
            .catch(err => {
                dispatch(getUsersDataFailure(err.message))
            })
    }
}
export function getUsersDataStarted() {
    return {
        type: GET_DATA_STARTED
    }
}
export function getUsersDataSuccess(data) {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
}
export function getUsersDataFailure(message) {
    return {
        type: GET_DATA_FAILURE,
        payload: message
    }
}

export function filterByName(value) {
    return{
        type: FILTER_USERS_BY_NAMES,
        payload: value
    }
}
export function filterByLastname(value) {
    return {
        type: FILTER_USERS_BY_LASTNAMES,
        payload: value
    }
}
export function filterByAge(value){
    return {
        type: FILTER_USERS_BY_AGE,
        payload: value
    }
}
export function filterBySex(value){
    return {
        type: FILTER_USERS_BY_SEX,
        payload: value
    }
}