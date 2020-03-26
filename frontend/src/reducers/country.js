import {FETCH_COUNTRIES, GET_COUNTRY} from "../actions/types";


const initialState = {
    isLoading: false,
    countries: [],
    error: '',
    next: null,
    prev: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {...state, continents: action.payload, isLoading: action.isLoading, error: action.error};
        case GET_COUNTRY:
            return {...state, continents: {...state.continents, [action.payload.id]: action.payload}};
        default:
            return state;
    }
}