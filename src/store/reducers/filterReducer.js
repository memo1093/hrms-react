import { ADD_FILTER, CLEAR_FILTER } from "../actions/filterActions";
import { filters } from "../initialValues/filters";

const initialState={
    filters:filters
}

export default function filterReducer (state=initialState,{type,payload}){
    switch (type) {
        case ADD_FILTER:
            return{
                ...state,
                filters:payload
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filters:payload
            }
        default:
            return state;
    }
}