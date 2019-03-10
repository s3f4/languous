import axios from "axios";
import { config } from "../config"


export const SIGNUP = "SIGNUP";
export const SIGNUP_REJECTED = "SIGNUP_REJECTED";
export const SIGNUP_PENDING = "SIGNUP_PENDING";
export const SIGNUP_FULFILLED = "SIGNUP_FULFILLED";

export const LOGIN = "LOGIN";
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_REJECTED = "LOGIN_REJECTED";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";

export const LOGOUT = "LOGOUT";

export const login = (user, redirect) => {
    return async dispatch => {
        try {
            dispatch({
                type: LOGIN_PENDING
            })
            const result = await axios.post(`${config[process.env.REACT_APP_ENV].apiUrl}/u/login`, { ...user })
            localStorage.setItem("token", result.data.user.token);
            redirect();
            dispatch({
                type: LOGIN_FULFILLED,
                payload: result.data.user
            })
        } catch (error) {
            dispatch({
                type: LOGIN_REJECTED,
                payload: error
            })
        }

    }
}

export const signup = (newUser, redirect) => {
    return async dispatch => {
        try {
            dispatch({
                type: SIGNUP_PENDING
            })
            const result = await axios.post(`${config[process.env.REACT_APP_ENV].apiUrl}/u/signup`, { ...newUser })
            localStorage.setItem("token", result.data.user.token);
            redirect();
            dispatch({
                type: SIGNUP_FULFILLED,
                payload: result.data.user
            })
        } catch (error) {
            dispatch({
                type: SIGNUP_REJECTED,
                payload: error
            })
        }

    }
}

export const signout = (redirect) => {
    return dispatch => {
        localStorage.removeItem("token")
        redirect();
        dispatch({
            type: LOGOUT
        })
    }
}
