import axios from "axios";

export default class CandidateService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidates/getAll")
    }
    
}