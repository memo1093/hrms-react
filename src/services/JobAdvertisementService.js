import axios from "axios";

export default class JobAdvertisementService{
    getAll(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getAll?pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    getAllSorted(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getAllSorted?pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getById?id="+id)
    }
    add(JobAdvertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",JobAdvertisement)
    }
  
}

