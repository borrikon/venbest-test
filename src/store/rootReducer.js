import {combineReducers} from "redux";
import {userReducer} from "./reducers/userReduser";

export const rootReducer = combineReducers({
    users: userReducer,
});
