import { combineReducers } from "redux";
import employerReducer from "./reducers/employerReducer";

const rootReducer = combineReducers({
   employer:employerReducer
})

export default rootReducer;