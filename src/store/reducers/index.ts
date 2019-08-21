import { combineReducers } from "redux";
import userName from '../reducers/user'

const reducer = combineReducers({
    userName: userName
})

export default reducer