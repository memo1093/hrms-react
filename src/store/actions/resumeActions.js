import ResumeService from "../../services/ResumeService"


export const GET_RESUME_BY_ID_SUCCESS="GET_RESUME_BY_ID_SUCCESS"
export const GET_RESUME_BY_ID_FAILURE="GET_RESUME_BY_ID_FAILURE"
export const UPDATE_GRADUATION_SUCCESS="UPDATE_GRADUATION_SUCCESS"
export const UPDATE_GRADUATION_FAILURE="UPDATE_GRADUATION_FAILURE"


let resumeService = new ResumeService()
export const  getResumeById=(id)=>async dispatch=>{
    await resumeService.getById(id)
    .then(response=>dispatch({
        type:GET_RESUME_BY_ID_SUCCESS,
        payload:response.data.data
    }))
    .catch(error=>dispatch({
        type:GET_RESUME_BY_ID_FAILURE,
        payload:error.message
    }))
}
export const  updateGraduation=(graduation)=>async dispatch=>{
    await resumeService.addOrUpdateGraduation(graduation)
    .then(response=>dispatch({
        type:UPDATE_GRADUATION_SUCCESS,
        payload:graduation
    })
    )
    .catch(error=>dispatch({
        type:UPDATE_GRADUATION_FAILURE,
        payload:error.message
    }))
}