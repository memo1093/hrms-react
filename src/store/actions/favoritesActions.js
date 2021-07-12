import { toast } from "react-toastify";
import FavoritesService from "../../services/FavoritesService";

export const GET_BY_CANDIDATE_ID_WITH_PAGES_SUCCESS =
  "GET_BY_CANDIDATE_ID_WITH_PAGES_SUCCESS";
export const GET_BY_CANDIDATE_ID_WITH_PAGES_FAILURE =
  "GET_BY_CANDIDATE_ID_WITH_PAGES_FAILURE";
export const GET_FAVORITES_BY_CANDIDATE_ID_SUCCESS =
  "GET_FAVORITES_BY_CANDIDATE_ID_SUCCESS";
export const GET_FAVORITES_BY_CANDIDATE_ID_FAILURE =
  "GET_FAVORITES_BY_CANDIDATE_ID_FAILURE";
export const ADD_TO_FAVORITES_SUCCESS = "ADD_TO_FAVORITES_SUCCESS";
export const ADD_TO_FAVORITES_FAILURE = "ADD_TO_FAVORITES_FAILURE";
export const DELETE_FROM_FAVORITES_SUCCESS = "DELETE_FROM_FAVORITES_SUCCESS";
export const DELETE_FROM_FAVORITES_FAILURE = "DELETE_FROM_FAVORITES_FAILURE";

let favoriteService = new FavoritesService();

export const getFavoritesByCandidateId = (candidateId) => async (dispatch) => {
  await favoriteService
    .getByCandidateId(candidateId)
    .then((result) =>
      dispatch({
        type: GET_FAVORITES_BY_CANDIDATE_ID_SUCCESS,
        payload: result.data.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_FAVORITES_BY_CANDIDATE_ID_FAILURE,
        payload: error.message,
      })
    );
};
export const addToFavorites =
  (candidateId, jobAdvertisement) => async (dispatch) => {
    await favoriteService
      .addToFavorites(candidateId, jobAdvertisement.id)
      .then((response) => {
        toast.info("İlan favoriler listesine eklendi");
        dispatch({
          type: ADD_TO_FAVORITES_SUCCESS,
          payload: {
            id: response.data.data,
            jobPositionAdvertisement: jobAdvertisement,
          },
        });
      })
      .catch((error) => {
        toast.error("Beklenmedik bir hata oluştu");

        dispatch({
          type: ADD_TO_FAVORITES_FAILURE,
          payload: error.message,
        });
      });
  };

export const deleteFromFavorites = (favoriteId) => async (dispatch) => {
  await favoriteService
    .deleteFromFavorites(favoriteId)
    .then((response) => {
      toast.info("İlan favoriler listesinden kaldırıldı");
      dispatch({
        type: DELETE_FROM_FAVORITES_SUCCESS,
        payload: favoriteId,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: DELETE_FROM_FAVORITES_FAILURE,
        payload: error.message,
      });
    });
};
