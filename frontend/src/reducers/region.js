import {FETCH_REGIONS, GET_REGION} from "../actions/types";


const initialState = {
    isLoading: false,
    regions: [],
    currentRegion: {},
    error: '',
    next: null,
    prev: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REGIONS:
            return {...state, regions: action.payload, isLoading: action.isLoading, error: action.error};
        case GET_REGION:
            return {...state, currentRegion: action.payload};
        default:
            return state;
    }
}