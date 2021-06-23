import axios from "axios";

export default class JobPositionService{
    getAll(){
       return axios.get("http://localhost:8080/api/positions/getAll")
    }
    getAllJobTimes(){
        return axios.get("http://localhost:8080/api/positions/getAllJobTimes")
    }
    getAllJobTypes(){
        return axios.get("http://localhost:8080/api/positions/getAllJobTypes")
    }

}