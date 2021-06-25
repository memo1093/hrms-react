import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";
import employerReducer from "./reducers/employerReducer";

const rootReducer = combineReducers({
   employers:employerReducer,
   candidates:candidateReducer,
})

export default rootReducer;