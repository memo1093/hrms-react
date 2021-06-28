
import { GET_ALL_EMPLOYEES_FAILURE, GET_ALL_EMPLOYEES_SUCCESS } from "../actions/employeeActions";
import { employees,message,loading } from "../initialValues/employees";




const initialState={
    employees:employees,
    message:message,
    loading:loading
}

export default function employeeReducer(state=initialState,{type,payload}) {
    switch (type) {
        case GET_ALL_EMPLOYEES_SUCCESS:
            return{
                ...state,
                employees:payload,
                loading:false
            }
        case GET_ALL_EMPLOYEES_FAILURE:
            return{
                ...state,
                message:payload,
                loading:false
            }
        default:
            return state;
    }
    
}