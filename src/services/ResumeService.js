import axios from "axios";

export default class ResumeService{
    getByCandidateId(candidateId){
       return axios.get(`http://localhost:8080/api/resumes/getByCandidateId?id=${candidateId}`)
    }
    getById(id){
        return axios.get(`http://localhost:8080/api/resumes/getById?id=${id}`)
    }
    addResume(resume){
        return axios.post(`http://localhost:8080/api/resumes/addResume`,resume)
    }
}