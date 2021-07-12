import EmployerService from "../../services/EmployerService"
import EmployeeService from "../../services/EmployeeService"
import { toast } from "react-toastify"

export const GET_ALL_EMPLOYER_SUCCESS="GET_ALL_SUCCESS"
export const GET_ALL_EMPLOYER_FAILURE="GET_ALL_FAILURE"
export const CHANGE_EMPLOYER_ACTIVATION_SUCCESS="CHANGE_EMPLOYER_ACTIVATION_SUCCESS"
export const CHANGE_EMPLOYER_ACTIVATION_FAILURE="CHANGE_EMPLOYER_ACTIVATION_FAILURE"
export const ADD_EMPLOYER_SUCCESS="ADD_EMPLOYER_SUCCESS"
export const ADD_EMPLOYER_FAILURE="ADD_EMPLOYER_FAILURE"



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
    .then(response=>{
        toast.info(
            `${employer.companyName} şirketinin aktivasyon durumu başarıyla güncellendi!`
          ) 
        dispatch({
        type:CHANGE_EMPLOYER_ACTIVATION_SUCCESS,
        payload:employer
    })})
    .catch(error=>{
        toast.error("Beklenmedik bir hata oluştu")
        dispatch({
        type:CHANGE_EMPLOYER_ACTIVATION_FAILURE,
        payload:error.message
    })})
   
}
export const addEmployer=(employer)=>dispatch=>{
    employerService.addOrUpdateEmployer(employer)
    .then(response=>{
      toast.success("Kayıt Başarılı!")
        dispatch({
        type:ADD_EMPLOYER_SUCCESS,
        payload:employer
    })})
    .catch(error=>{
        toast.error("Beklenmedik bir hata oluştu")
        dispatch({
        type:ADD_EMPLOYER_FAILURE,
        payload:error.message
    })})
   
}

