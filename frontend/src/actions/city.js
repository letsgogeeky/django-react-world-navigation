import axios from "axios";
import {ADD_CITY, DELETE_CITY, FETCH_CITIES, GET_CITY, UPDATE_CITY} from "./types";
import history from "../history";

export const addCity = (city) => dispatch => {
    axios.post('/api/city/', city)
        .then(res => {
            dispatch({
                type: ADD_CITY,
                payload: res.data
            });
            history.push(`/country/${res.data.countrycode}`)
        })
};

export const updateCity = (city) => dispatch => {
    axios.put(`/api/city/${city.id}/`, city)
        .then(res => {
            dispatch({
                type: UPDATE_CITY,
                payload: res.data
            })
            history.push(`/country/${city.countrycode}`)
        })
};

export const deleteCity = (id) => dispatch => {
    axios.delete(`/api/city/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_CITY,
                payload: id
            })
        })
};


export const fetchCities = (countryCode) => dispatch => {
    // I added big limit temporarily to skip working on pagination for now.
    axios.get(`/api/city/?limit=200&countrycode=${countryCode}`)
        .then(res => {
            dispatch({
                type: FETCH_CITIES,
                isLoading: false,
                payload: res.data,
            })
        }).catch(err => {
        dispatch({
            type: FETCH_CITIES,
            error: 'something very bad happened!'
        })
    });
};

export const getCity = (id) => dispatch => {
    dispatch({
        type: GET_CITY, isLoading: true
    });
    axios.get(`/api/city/${id}`)
        .then(res => {
            dispatch({
                type: GET_CITY,
                isLoading: false,
                payload: res.data,
            })
        }).catch(err => {
        dispatch({
            type: GET_CITY,
            error: 'something very bad happened!'
        })
    });
};