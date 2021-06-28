import EmployeeService from "../../services/EmployeeService"

export const GET_ALL_EMPLOYEES_SUCCESS ='GET_ALL_EMPLOYEES_SUCCESS'
export const GET_ALL_EMPLOYEES_FAILURE ='GET_ALL_EMPLOYEES_FAILURE'


let employeeService = new EmployeeService()
export const getAllEmployees=(pageNo,pageSize)=>async dispatch=>{
   await employeeService.getAll(pageNo,pageSize)
    .then(response=>
        dispatch({
            type:GET_ALL_EMPLOYEES_SUCCESS,
            payload:response.data.data,
            loading:false
        }))
    .catch(error=>dispatch({
            type:GET_ALL_EMPLOYEES_FAILURE,
            payload:error.message,
            loading:false
    }))
}
