import {
  ADD_JOB_ADVERTISEMENT_FAILURE,
  ADD_JOB_ADVERTISEMENT_SUCCESS,
  GET_ALL_JOB_ADVERTISEMENTS_SORTED_FAILURE,
  GET_ALL_JOB_ADVERTISEMENTS_SORTED_SUCCESS,
  GET_BY_FILTER_WITH_PAGES_FAILURE,
  GET_BY_FILTER_WITH_PAGES_SUCCESS,
  GET_BY_ID_JOB_ADVERTISEMENT_FAILURE,
  GET_BY_ID_JOB_ADVERTISEMENT_SUCCESS,
} from "../actions/jobAdvertisementActions";
import {
  jobAdvertisements,
  message,
  loading,
} from "../initialValues/jobAdvertisements";

const initialState = {
  jobAdvertisements: jobAdvertisements,
  message: message,
  loading: loading,
};

export default function jobAdvertisementReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_JOB_ADVERTISEMENTS_SORTED_SUCCESS:
      return {
        ...state,
        jobAdvertisements: payload,
        loading: false,
      };
    case GET_ALL_JOB_ADVERTISEMENTS_SORTED_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case GET_BY_FILTER_WITH_PAGES_SUCCESS:
      return {
        ...state,
        jobAdvertisements: payload,
        loading: false,
      };
    case GET_BY_FILTER_WITH_PAGES_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
      case GET_BY_ID_JOB_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        jobAdvertisement: payload,
        loading: false,
      };
    case GET_BY_ID_JOB_ADVERTISEMENT_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
      case ADD_JOB_ADVERTISEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case ADD_JOB_ADVERTISEMENT_FAILURE:
        return {
          ...state,
          message: payload,
          loading: false,
        };
    default:
      return state;
  }
}
