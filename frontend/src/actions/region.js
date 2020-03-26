import axios from 'axios';

import {FETCH_REGIONS, GET_REGION} from "./types";

export const fetchRegions = (continentName) => dispatch => {
    dispatch({
        type: FETCH_REGIONS, isLoading: true
    });
    axios.get(`/api/regions/?continent=${continentName}`)
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

export const getRegion = (regionName) => dispatch => {
    dispatch({
        type: GET_REGION, isLoading: true
    });
    axios.get(`/api/region/?region=${regionName}`)
        .then(res => {
            dispatch({
                type: GET_REGION,
                isLoading: false,
                payload: res.data,
            })
        }).catch(err => {
        dispatch({
            type: GET_REGION,
            error: 'something very bad happened!'
        })
    });
};