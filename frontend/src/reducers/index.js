import continents from './continents';
import cities from './city';
import countries from './country';
import regions from './region';

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    continents,
    countries,
    cities,
    regions
});

export default rootReducer;

