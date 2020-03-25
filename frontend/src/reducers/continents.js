import {FETCH_CONTINENTS, GET_CONTINENT} from "../actions/types";


const initialState = {
    isLoading: false,
    continents: [],
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTINENTS:
            return {...state, continents: action.payload, isLoading: action.isLoading, error: action.error};
        case GET_CONTINENT:
            return {...state, continents: {...state.continents, [action.payload.id]: action.payload}};
        default:
            return state;
    }
}