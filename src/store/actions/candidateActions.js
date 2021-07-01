import CandidateService from "../../services/CandidateService"

export const GET_ALL_CANDIDATES_SUCCESS="GET_ALL_CANDIDATES_SUCCESS"
export const GET_ALL_CANDIDATES_FAILURE="GET_ALL_CANDIDATES_FAILURE"
export const ADD_OR_DELETE_FAVORITES_SUCCESS="ADD_OR_DELETE_FAVORITES_SUCCESS"
export const ADD_OR_DELETE_FAVORITES_FAILURE="ADD_OR_DELETE_FAVORITES_FAILURE"



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

