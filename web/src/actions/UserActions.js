import axios from "axios";
import { config } from "../config"
export const apiURL = config[process.env.REACT_APP_ENV].apiUrl


export const SIGNUP = "SIGNUP";
export const SIGNUP_REJECTED = "SIGNUP_REJECTED";
export const SIGNUP_PENDING = "SIGNUP_PENDING";
export const SIGNUP_FULFILLED = "SIGNUP_FULFILLED";

export const LOGIN = "LOGIN";
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_REJECTED = "LOGIN_REJECTED";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";

export const LOGOUT = "LOGOUT";

/**
 * login with form data set token item and redirect
 * @param {*} user form data
 * @param {*} redirect  redirect function
 */
export const login = (user, redirect) => {
    return dispatch => {
        dispatch({
            type: LOGIN,
            payload: axios.post(`${config[process.env.REACT_APP_ENV].apiUrl}/u/login`, { ...user })
                .then(result => {
                    localStorage.setItem("token", result.data.user.token);
                    redirect();
                    return result.data.user;
                })
        });
    }
}
/**
 * 
 * @param {object} newUser signup form
 * @param {function} redirect function
 */
export const signup = (newUser, redirect) => {
    return dispatch => {
        dispatch({
            type: SIGNUP,
            payload: axios.post(`${config[process.env.REACT_APP_ENV].apiUrl}/u/signup`, { ...newUser })
                .then(result => {
                    localStorage.setItem("token", result.data.user.token);
                    redirect();
                    return result.data.user;
                })
        })
    }
}

/**
 * clears localstorage and redirect to page
 * @param {*} redirect 
 */
export const signout = (redirect) => {
    return dispatch => {
        localStorage.removeItem("token")
        redirect();
        dispatch({
            type: LOGOUT
        })
    }
}

export const userList = () => { }
export const removeUser = () => { }

export const profile = () => {
    return async dispatch => {
        axios.get(`${apiURL}/profile`)
    }
}