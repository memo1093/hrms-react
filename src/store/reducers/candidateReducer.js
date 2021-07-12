import {
  GET_ALL_CANDIDATES_SUCCESS,
  GET_ALL_CANDIDATES_FAILURE,
  ADD_CANDIDATE_SUCCESS,
  ADD_CANDIDATE_FAILURE,
} from "../actions/candidateActions";
import {
  candidate,
  candidates,
  loading,
  message,
} from "../initialValues/candidates";

const initialState = {
  candidates: candidates,
  candidate: candidate,
  message: message,
  loading: loading,
};

export default function candidateReducer(
  state = initialState,
  { payload, type }
) {
  switch (type) {
    case GET_ALL_CANDIDATES_SUCCESS:
      return {
        ...state,
        candidates: payload,
        loading: false,
      };
    case GET_ALL_CANDIDATES_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case ADD_CANDIDATE_SUCCESS:
      return {
        ...state,
        candidate: payload,
        loading: false,
      };
    case ADD_CANDIDATE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };

    default:
      return state;
  }
}
