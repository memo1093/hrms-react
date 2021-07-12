import { toast } from "react-toastify"
import CandidateService from "../../services/CandidateService"

export const GET_ALL_CANDIDATES_SUCCESS="GET_ALL_CANDIDATES_SUCCESS"
export const GET_ALL_CANDIDATES_FAILURE="GET_ALL_CANDIDATES_FAILURE"

export const ADD_CANDIDATE_SUCCESS = "ADD_CANDIDATE_SUCCESS"
export const ADD_CANDIDATE_FAILURE="ADD_CANDIDATE_FAILURE"


let candidateService = new CandidateService()
export const  getAllCandidates=(pageNo,pageSize)=>async dispatch=>{
    await candidateService.getAll(pageNo,pageSize)
    .then(response=>dispatch({
        type:GET_ALL_CANDIDATES_SUCCESS,
        payload:response.data.data
    }))
    .catch(error=>dispatch({
        type:GET_ALL_CANDIDATES_FAILURE,
        payload:error.message
    }))
}
export const addCandidate=(candidate)=>async dispatch=>{
    await candidateService.addOrUpdateCandidate(candidate)
    .then(response=>{
        toast.success("Kayıt Başarılı")
        dispatch({
        type:ADD_CANDIDATE_SUCCESS,
        payload:candidate
    })})
    .catch(error=>{
        toast.error("Beklenmedik bir hata oluştu")
        dispatch({
        type:ADD_CANDIDATE_FAILURE,
        payload:error.message
    })})
}

