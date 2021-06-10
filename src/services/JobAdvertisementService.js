import axios from "axios";

export default class JobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    getAllSorted(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllSorted")
    }
}