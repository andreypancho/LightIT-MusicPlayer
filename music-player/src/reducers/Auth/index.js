import {FETCH_AUTH_SUCCESS, FETCH_AUTH_REQUEST, FETCH_AUTH_FAIL} from '../../actions/Auth/types';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    errors: null,
    currentUser: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_AUTH_SUCCESS:
            return {
                ...state,
                playList: action.payload,
                isAuthenticated: true,
                errors: null,
            };
        case FETCH_AUTH_FAIL:
            return {
                ...state,
                errors: action.payload,
            };
        default: return state;
    }
}