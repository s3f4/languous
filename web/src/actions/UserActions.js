import axios from "axios";
export const USER_ADD = "USER_ADD";

export const userAdd = (newUser) => {
    return dispatch => {
        dispatch({
            type: USER_ADD,
            payload: axios.post(`http://localhost:3001/users/`, { ...newUser })
        });
    }
}

export const login = () => {

}