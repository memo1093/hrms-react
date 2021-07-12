import axios from "axios";

export default class CandidateService {
  getAll(pageNo, pageSize) {
    return axios.get(
      `http://localhost:8080/api/candidates/getAll?pageNo=${pageNo}&pageSize=${pageSize}`
    );
  }
  addOrUpdateCandidate(candidate) {
    return axios.post(
      `http://localhost:8080/api/candidates/addOrUpdate`,candidate
    );
  }
 
}
