import axios from "axios";

export default class EmployeeService{
    getAll(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/employees/getAll?pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    changeActivation(employerId){
        return axios.post("http://localhost:8080/api/employees/changeActivation?employerId="+employerId)
    }
}