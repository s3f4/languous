import axios from "axios";
import { config } from "../config"

export const apiURL = config[process.env.REACT_APP_ENV].apiUrl

export const ADD_WORD = "ADD_WORD";
export const ADD_WORD_PENDING = "ADD_WORD_PENDING";
export const ADD_WORD_REJECTED = "ADD_WORD_REJECTED";
export const ADD_WORD_FULFILLED = "ADD_WORD_FULFILLED";

export const GET_WORD = "GET_WORD";
export const GET_WORD_PENDING = "GET_WORD_PENDING";
export const GET_WORD_REJECTED = "GET_WORD_REJECTED";
export const GET_WORD_FULFILLED = "GET_WORD_FULFILLED";

export const UPDATE_WORD = "UPDATE_WORD";
export const UPDATE_WORD_PENDING = "UPDATE_WORD_PENDING";
export const UPDATE_WORD_REJECTED = "UPDATE_WORD_REJECTED";
export const UPDATE_WORD_FULFILLED = "UPDATE_WORD_FULFILLED";

export const DELETE_WORD = "DELETE_WORD"
export const DELETE_WORD_PENDING = "DELETE_WORD_PENDING"
export const DELETE_WORD_REJECTED = "DELETE_WORD_REJECTED"
export const DELETE_WORD_FULFILLED = "DELETE_WORD_FULFILLED"

export const FETCH_WORDS = "FETCH_WORDS";
export const FETCH_WORDS_PENDING = "FETCH_WORDS_PENDING";
export const FETCH_WORDS_REJECTED = "FETCH_WORDS_REJECTED";
export const FETCH_WORDS_FULFILLED = "FETCH_WORDS_FULFILLED";


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
export const getWord = (wordId) => {
    return dispatch => {
        dispatch({
            type: GET_WORD,
            payload: axios.get(`${apiURL}/${wordId}`)
                .then(result => result.data)
        })
    }
}

/**
 * 
 * @param {*} wordId 
 * @param {*} newWord 
 */
export const updateWord = (wordId, newWord) => {
    return dispatch => dispatch({
        type: UPDATE_WORD,
        payload: axios.put(`${apiURL}/${wordId}`, newWord)
            .then(result => result.data)
    });
}

/**
 * 
 * @param {*} wordId 
 */
export const deleteWord = (wordId) => {
    return dispatch => {
        dispatch({
            type: DELETE_WORD,
            payload: axios.delete(`${apiURL}/${wordId}`)
                .then(result => result.data)
        });
    }
}


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