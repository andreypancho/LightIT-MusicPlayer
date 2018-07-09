import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import playerReducer from './player'

const rootReducer = combineReducers({
    player: playerReducer,
    form: formReducer,
});

export default rootReducer