import axios from 'axios';

import {FETCH_REGIONS} from "./types";

export const getRegions = (continentName) => dispatch => {
    dispatch({
        type: FETCH_REGIONS, isLoading: true
    });
    axios.get(`/regions/?continent=${continentName}`)
        .then(res => {
            dispatch({
                type: FETCH_REGIONS,
                isLoading: false,
                payload: res.data,
            })
        }).catch(err => {
        dispatch({
            type: FETCH_REGIONS,
            error: 'something very bad happened!'
        })
    });
};