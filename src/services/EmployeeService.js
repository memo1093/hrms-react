import axios from "axios";

export default class EmployeeService{
    getAll(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/employees/getAll?pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    getAllUsers(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/employees/getAllUsers?pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    changeActivation(employerId){
        return axios.post("http://localhost:8080/api/employees/changeActivation?employerId="+employerId)
    }
    setRoleToUser(userId,roleName){
        return axios.post(`http://localhost:8080/api/employees/setRoleToUser?roleName=${roleName}&userId=${userId}`)
    }
    addOrUpdate(employee){
        return axios.post("http://localhost:8080/api/employees/addOrUpdate"+employee)
    }
}