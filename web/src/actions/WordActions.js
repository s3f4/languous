import axios from "axios";
import { config } from "../config"

export const ADD_WORD = "ADD_WORD";

export const FETCH_WORDS = "FETCH_WORDS";
export const FETCH_WORDS_PENDING = "FETCH_WORDS_PENDING";
export const FETCH_WORDS_REJECTED = "FETCH_WORDS_REJECTED";
export const FETCH_WORDS_FULFILLED = "FETCH_WORDS_FULFILLED";


const apiURL = config[process.env.REACT_APP_ENV].apiUrl

/**
 * 
 * @param {*} word object
 */
export const addWord = (word) => {
    return dispatch => {
        dispatch({
            type: ADD_WORD,
            payload: axios.post(`${apiURL}/words`, word)
                .then(result => result.data)
        });
    }
}

/**
 * 
 * @param {*} wordId 
 */
export const getWord = (wordId) => { }

/**
 * 
 * @param {*} wordId 
 */
export const deleteWord = (wordId) => { }


/**
 * fethcAllWords
 */
export const fetchAllWords = () => {
    return dispatch => {
        dispatch({
            type: FETCH_WORDS,
            payload: axios.get(`${apiURL}/words`)
                .then(result => result.data.words)
        })
    }
}