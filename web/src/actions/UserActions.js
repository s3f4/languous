import axios from "axios";
import { config } from "../config"


export const USER_ADD = "USER_ADD";
export const USER_ADD_REJECTED = "USER_ADD_REJECTED";
export const USER_ADD_PENDING = "USER_ADD_PENDING";
export const USER_ADD_FULFILLED = "USER_ADD_FULFILLED";


export const login = (user) => {

}

export const userAdd = (newUser) => {
    return dispatch => {
        dispatch({
            type: USER_ADD,
            payload: axios.post(`${config[process.env.REACT_APP_ENV]}/register`, { ...newUser })
                .then(result => {
                    return result.data;
                })
        });
    }
}
