import {FETCH_SUCCESS, FETCH_REQUEST, FETCH_FAIL} from '../actions/types';

const initialState = {
    playList: null,
    isLoading: false,
    errors: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                playList: action.payload,
                errors: null,
            };
        case FETCH_FAIL:
            return {
                ...state,
                errors: action.payload,
            };
        default: return state;
    }
}