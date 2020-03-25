import {ADD_CITY, DELETE_CITY, FETCH_CITIES, GET_CITY, UPDATE_CITY} from "../actions/types";
import _ from 'lodash';

const initialState = {
    isLoading: false,
    cities: [],
    next: null,
    prev: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITIES:
            return {
                ...state,
                next: action.payload.next,
                prev: action.payload.prev,
                cities: {..._.mapKeys(action.payload, 'id')}
            };
        case ADD_CITY:
            return {...state, cities: {...state.cities, [action.payload.id]: action.payload}};
        case UPDATE_CITY:
            return {...state, cities: {...state.cities, [action.payload.id]: action.payload}};
        case GET_CITY:
            return {...state, cities: {...state.cities, [action.payload.id]: action.payload}};
        case DELETE_CITY:
            return {...state, cities: _.omit(state.cities, action.payload)};
        default:
            return state;
    }
}