import axios from "axios";

export default class EmployeeService{
    getAll(){
        return axios.get("http://localhost:8080/api/employees/getAll")
    }
    changeActivation(employerId){
        return axios.post("http://localhost:8080/api/employees/changeActivation?employerId="+employerId)
    }
}