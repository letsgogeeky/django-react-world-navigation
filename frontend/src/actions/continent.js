import axios from 'axios';

import {FETCH_CONTINENTS} from "./types";

export const getContinents = () => dispatch => {
    dispatch({
        type: FETCH_CONTINENTS, isLoading: true
    });
    axios.get('/continents/')
        .then(res => {
            dispatch({
                type: FETCH_CONTINENTS,
                payload: res.data,
            })
        }).catch(err => {
        dispatch({
            type: FETCH_CONTINENTS,
            error: 'something very bad happened!'
        })
    });
};