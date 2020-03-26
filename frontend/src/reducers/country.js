import {FETCH_COUNTRIES, GET_COUNTRY} from "../actions/types";


const initialState = {
    isLoading: false,
    countries: [],
    currentCountry: null,
    error: '',
    next: null,
    prev: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {...state, countries: action.payload.results, isLoading: action.isLoading, error: action.error};
        case GET_COUNTRY:
            return {...state, currentCountry: action.payload};
        default:
            return state;
    }
}