import {
    USER_ADD
} from "../actions/UserActions"

const initialState = {
};

export default (state = initialState, action) => {
    if (action.type === USER_ADD) {
        return {
            ...state,
            users: action.payload
        }
    } else {
        return state;
    }
}