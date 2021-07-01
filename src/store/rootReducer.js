import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";
import employeeReducer from "./reducers/employeeReducer";
import employerReducer from "./reducers/employerReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import resumeReducer from "./reducers/resumeReducer";

const rootReducer = combineReducers({
   employers:employerReducer,
   candidates:candidateReducer,
   employees:employeeReducer,
   resume:resumeReducer,
   favorites:favoritesReducer
})

export default rootReducer;