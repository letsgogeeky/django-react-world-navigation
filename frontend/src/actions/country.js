import axios from 'axios';

import {FETCH_COUNTRIES, GET_COUNTRY} from "./types";

export const getCountriesInRegion = (regionName) => dispatch => {
    // dispatch({
    //     type: FETCH_COUNTRIES, isLoading: true
    // });
    axios.get(`/api/country/?region=${regionName}`)
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

export const getCountry = (code) => dispatch => {
    axios.get(`/api/country/${code}`)
        .then(res => {
            dispatch({
                type: GET_COUNTRY,
                payload: res.data,
            })
        }).catch(err => {
        dispatch({
            type: GET_COUNTRY,
            error: 'something very bad happened!'
        })
    });
};