import {FETCH_AUTH_SUCCESS, FETCH_AUTH_REQUEST, FETCH_AUTH_FAIL} from '/types';
import axios from "axios/index";

export const fetchAuthRequest = (params) => {
    return function (dispatch) {
        dispatch({type: FETCH_AUTH.request});

        axios.post('https://reqres.in/api/login', {params})
            .then(response => {
                dispatch({
                    type: FETCH_AUTH.success,
                    payload: response,
                })
            })
            .catch(err => {
                dispatch({
                    types: FETCH_AUTH.fail,
                    payload: err,
                })
            })
    }
};