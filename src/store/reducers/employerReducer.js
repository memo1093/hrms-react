import { CHANGE_ACTIVATION_FAILURE, CHANGE_ACTIVATION_SUCCESS, GET_ALL_EMPLOYER_FAILURE, GET_ALL_EMPLOYER_SUCCESS} from "../actions/employerActions";
import { employers, loading, message } from "../initialValues/employers";



const initialState={
    employers:employers,
    message:message,
    loading:loading
}



export default function employerReducer(state=initialState,{type,payload}){
    switch (type) {
        case GET_ALL_EMPLOYER_SUCCESS:
            return{
                ...state,
                employers:payload,
                loading:false
            }
        case GET_ALL_EMPLOYER_FAILURE:
            return{
                ...state,
                message:payload,
                loading:false
            }
       
        case CHANGE_ACTIVATION_SUCCESS:
            let employerIndex= state.employers.findIndex(employer=>employer.id===payload.id)
            return{
                ...state,
                employers:state.employers.map((employer,i)=>i===employerIndex?{...employer,activated:!payload.activated}:employer)
            }
        case CHANGE_ACTIVATION_FAILURE:
            return{
                ...state,
                message:payload
            }
        default:
            return state;
    }
    
    
    
}