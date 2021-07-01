import axios from "axios";


export default class FavoritesService{
    getByCandidateIdWithPages(candidateId,pageNo,pageSize) {
        return axios.get(
          `http://localhost:8080/api/favorites/getByCandidateIdWithPages?candidateId=${candidateId}&pageNo=${pageNo}&pageSize=${pageSize}`
        );
      }
      getByCandidateId(candidateId) {
        return axios.get(
          `http://localhost:8080/api/favorites/getByCandidateId?candidateId=${candidateId}`
        );
      }
      addToFavorites(candidateId, jobAdvertisementId) {
        return axios.post(`http://localhost:8080/api/candidates/addToFavorites`, {
          candidateId: candidateId,
          jobPositionAdvertisementId: jobAdvertisementId,
        });
      }
      deleteFromFavorites(id) {
        return axios.delete(
          `http://localhost:8080/api/candidates/deleteFromFavorites`,{params:{favoriteJobAdvertisementId:id}}
          
        );
      }
}