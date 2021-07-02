import JobAdvertisementService from "../../services/JobAdvertisementService";

export const GET_ALL_JOB_ADVERTISEMENTS_SORTED_SUCCESS='GET_ALL_JOB_ADVERTISEMENTS_SORTED_SUCCESS'
export const GET_ALL_JOB_ADVERTISEMENTS_SORTED_FAILURE='GET_ALL_JOB_ADVERTISEMENTS_SORTED_FAILURE'
export const GET_BY_FILTER_WITH_PAGES_SUCCESS='GET_BY_FILTER_WITH_PAGES_SUCCESS'
export const GET_BY_FILTER_WITH_PAGES_FAILURE='GET_BY_FILTER_WITH_PAGES_FAILURE'

let jobAdvertisementService = new JobAdvertisementService();

export const getAllJobAdvertisementsSorted = (pageNo,pageSize) => async (dispatch) => {
  await jobAdvertisementService
    .getAllSorted(pageNo,pageSize)
    .then((result) =>
      dispatch({
        type: GET_ALL_JOB_ADVERTISEMENTS_SORTED_SUCCESS,
        payload: result.data.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_ALL_JOB_ADVERTISEMENTS_SORTED_FAILURE,
        payload: error.message,
      })
    );
};
export const getByFilterWithPages = (values,pageNo,pageSize) => async (dispatch) => {
  await jobAdvertisementService
    .getByFilterWithPages(values,pageNo,pageSize)
    .then((result) =>
      dispatch({
        type: GET_BY_FILTER_WITH_PAGES_SUCCESS,
        payload: result.data.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_BY_FILTER_WITH_PAGES_FAILURE,
        payload: error.message,
      })
    );
};
