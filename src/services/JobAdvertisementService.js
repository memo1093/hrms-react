import axios from "axios";

export default class JobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    getAllSorted(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllSorted")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getById?id="+id)
    }
    add(JobAdvertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",JobAdvertisement)
    }
  
}

