import EmployerService from "../../services/EmployerService"

export const GET_ALL_SUCCESS="GET_ALL_SUCCESS"
export const GET_ALL_FAILURE="GET_ALL_FAILURE"
export const CHANGE_ACTIVATION="CHANGE_ACTIVATION"


let employerService = new EmployerService()

export const getAllEmployers=()=>dispatch=>{
    employerService.getAll()
    .then(response=>dispatch({
        type:GET_ALL_SUCCESS,
        payload:response.data.data
    }))
    .catch(error=>dispatch({
        type:GET_ALL_FAILURE,
        payload:error
    }))
}

export const changeActivation=(employer)=>{
    return {
        type:CHANGE_ACTIVATION,
        payload:employer
    }
}