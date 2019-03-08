import WordReducers from "./WordReducers";
import UserReducers from "./UserReducers";
import { combineReducers } from "redux"

export default combineReducers({
    userReducer: UserReducers,
    wordReducer: WordReducers,
})