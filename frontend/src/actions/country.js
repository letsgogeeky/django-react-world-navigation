import axios from 'axios';

import {FETCH_COUNTRIES} from "./types";

export const getCountriesInRegion = (regionName) => dispatch => {
    // dispatch({
    //     type: FETCH_COUNTRIES, isLoading: true
    // });
    axios.get(`/country/?region=${regionName}`)
        .then(res => {
            dispatch({
                type: FETCH_COUNTRIES,
                payload: res.data,
            })
        }).catch(err => {
        dispatch({
            type: FETCH_COUNTRIES,
            error: 'something very bad happened!'
        })
    });
};