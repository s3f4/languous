import {
    USER_ADD_PENDING,
    USER_ADD_REJECTED,
    USER_ADD_FULFILLED,
} from "../actions"


const INITIAL_STATE = {
    user: {},
    loading: false,
    error: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ADD_PENDING:
            return {
                ...state
            }
        case USER_ADD_FULFILLED:
            return {
                ...state,
                user: action.payload
            }
        case USER_ADD_REJECTED:
            return {
                ...state,
                error: action.payload.message
            }
        default:
            return state;
    }
}