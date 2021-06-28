import EmployerService from "../../services/EmployerService"
import EmployeeService from "../../services/EmployeeService"

export const GET_ALL_EMPLOYER_SUCCESS="GET_ALL_SUCCESS"
export const GET_ALL_EMPLOYER_FAILURE="GET_ALL_FAILURE"
export const CHANGE_EMPLOYER_ACTIVATION_SUCCESS="CHANGE_EMPLOYER_ACTIVATION_SUCCESS"
export const CHANGE_EMPLOYER_ACTIVATION_FAILURE="CHANGE_EMPLOYER_ACTIVATION_FAILURE"



let employerService = new EmployerService()
let employeeService = new EmployeeService()

export const getAllEmployers=(pageNo,pageSize)=>async dispatch=>{
  await employerService.getAll(pageNo,pageSize)
    .then(response=>dispatch({
        type:GET_ALL_EMPLOYER_SUCCESS,
        payload:response.data.data
    }))
    .catch(error=>dispatch({
        type:GET_ALL_EMPLOYER_FAILURE,
        payload:error.message
    }))
}
export const changeActivation=(employer)=>dispatch=>{
    const {id}=employer
    employeeService.changeActivation(id)
    .then(response=>dispatch({
        type:CHANGE_EMPLOYER_ACTIVATION_SUCCESS,
        payload:employer
    }))
    .catch(error=>dispatch({
        type:CHANGE_EMPLOYER_ACTIVATION_FAILURE,
        payload:error.message
    }))
   
}

