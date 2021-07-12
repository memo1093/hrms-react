import axios from "axios";

export default class EmployerService{
    getAll(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/employers/getAll?pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    addOrUpdateEmployer(employer){
        return axios.post(`http://localhost:8080/api/employers/addOrUpdate`,employer)
    }
}