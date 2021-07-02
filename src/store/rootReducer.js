import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";
import employeeReducer from "./reducers/employeeReducer";
import employerReducer from "./reducers/employerReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import filterReducer from "./reducers/filterReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import resumeReducer from "./reducers/resumeReducer";

const rootReducer = combineReducers({
   employers:employerReducer,
   candidates:candidateReducer,
   employees:employeeReducer,
   resume:resumeReducer,
   favorites:favoritesReducer,
   jobAdvertisements:jobAdvertisementReducer,
   filters:filterReducer
})

export default rootReducer;