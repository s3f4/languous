import {
    SIGNUP_PENDING,
    SIGNUP_REJECTED,
    SIGNUP_FULFILLED,

    LOGIN_PENDING,
    LOGIN_REJECTED,
    LOGIN_FULFILLED,
    LOGOUT,
} from "../actions"


const INITIAL_STATE = {
    user: {},
    auth: localStorage.getItem("token"),
    loading: false,
    error: {}
};
/**
 * User Reducers
 */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                user: {},
                auth: null
            }
        case LOGIN_PENDING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_FULFILLED:
            return {
                ...state,
                auth: action.payload.token,
                user: action.payload,
                loading: false
            }
        case LOGIN_REJECTED:
            return {
                ...state,
                error: action.payload.message,
                loading: false
            }
        case SIGNUP_PENDING:
            return {
                ...state,
                loading: true
            }
        case SIGNUP_FULFILLED:
            return {
                ...state,
                auth: action.payload.token,
                user: action.payload,
                loading: false
            }
        case SIGNUP_REJECTED:
            return {
                ...state,
                error: action.payload.message,
                loading: false
            }
        default:
            return state;
    }
}