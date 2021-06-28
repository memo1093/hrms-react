import axios from "axios";

export default class GraduationService{
    getByResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/graduations/getByResumeId?resumeId=${resumeId}`)
    }
}