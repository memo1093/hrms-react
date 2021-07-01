import { GET_ALL_CANDIDATES_SUCCESS, GET_ALL_CANDIDATES_FAILURE } from "../actions/candidateActions";
import { candidates, loading, message } from "../initialValues/candidates";


const initialState={
    candidates:candidates,
    message:message,
    loading:loading
}

export default function candidateReducer(state=initialState,{payload,type}) {
    switch (type) {
        case GET_ALL_CANDIDATES_SUCCESS:
            return{
                ...state,
                candidates:payload,
                loading:false
            }
            case GET_ALL_CANDIDATES_FAILURE:
            return{
                ...state,
                message:payload,
                loading:false
            }
           
        default:
            return state;
    }
}
