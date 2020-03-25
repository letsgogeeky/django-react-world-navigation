import axios from "axios";
import {ADD_CITY} from "./types";

export const addCity = (city) => dispatch => {
    axios.post('/city/', city)
        .then(res => {
            dispatch({
                type: ADD_CITY,
                payload: res.data
            })
        })
};