import {FETCH_SUCCESS, FETCH_REQUEST, FETCH_FAIL} from '/types';
import axios from 'axios';

export const fetchPlayList = id => {
    return function (dispatch) {
        dispatch({type: FETCH_PLAYLIST.request});

        axios.get('https://api.deezer.com/search/track?q=eminem').fetchPlayList(id)
            .then(response => {
                dispatch({
                    type: FETCH_PLAYLIST.success,
                    payload: response,
                })
            })
            .catch(err => {
                dispatch({
                    types: FETCH_PLAYLIST.fail,
                    payload: err,
                })
            })
    }
};