import axios from "axios";
import { config } from "../config"

export const FETCH_WORDS = "FETCH_WORDS"
export const FETCH_WORDS_PENDING = "FETCH_WORDS_PENDING"
export const FETCH_WORDS_REJECTED = "FETCH_WORDS_REJECTED"
export const FETCH_WORDS_FULFILLED = "FETCH_WORDS_FULFILLED"

export const fetchAllWords = () => {
    return dispatch => {
        dispatch({
            type: FETCH_WORDS,
            payload: axios.get(`${config[process.env.REACT_APP_ENV].apiUrl}/words`)
                .then(result => result.data.words)
        })
    }
}