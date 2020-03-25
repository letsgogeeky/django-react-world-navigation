import continents from './continents';
import cities from './city';
import countries from './country';

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    continents,
    countries,
    cities,
});

export default rootReducer;

