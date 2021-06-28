
import { GET_RESUME_BY_ID_FAILURE, GET_RESUME_BY_ID_SUCCESS } from "../actions/resumeActions";
import { resume, loading, message } from "../initialValues/resume";



const initialState={
    resume:resume,
    message:message,
    loading:loading
}

export default function resumeReducer(state=initialState,{type,payload}){
    switch (type) {
        case GET_RESUME_BY_ID_SUCCESS:
            return{
                ...state,
                resume:payload,
                loading:false
            }
        case GET_RESUME_BY_ID_FAILURE:
            return{
                ...state,
                message:payload,
                loading:false
            }
        default:
            return state;
    }
    
    
    
}