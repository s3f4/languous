import {
    FETCH_WORDS_PENDING,
    FETCH_WORDS_REJECTED,
    FETCH_WORDS_FULFILLED
} from "../actions/WordActions"

const INITIAL_STATE = {
    fetching: true,
    words: [],
    errors: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_WORDS_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_WORDS_REJECTED:
            return {
                ...state,
                errors: action.payload,
                fetching: false
            }
        case FETCH_WORDS_FULFILLED:
            return {
                ...state,
                fetching: false,
                words: action.payload
            }
        default: return state;
    }
}