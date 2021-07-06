import {
  ADD_GRADUATION_FAILURE,
  ADD_GRADUATION_SUCCESS,
  ADD_JOB_EXPERIENCE_FAILURE,
  ADD_JOB_EXPERIENCE_SUCCESS,
  ADD_LANGUAGE_FAILURE,
  ADD_LANGUAGE_SUCCESS,
  ADD_RESUME_HEAD_FAILURE,
  ADD_RESUME_HEAD_SUCCESS,
  ADD_RESUME_IMAGE_FAILURE,
  ADD_RESUME_IMAGE_SUCCESS,
  ADD_TALENT_FAILURE,
  ADD_TALENT_SUCCESS,
  ADD_WEB_ADDRESSES_FAILURE,
  ADD_WEB_ADDRESSES_SUCCESS,
  DELETE_GRADUATION_FAILURE,
  DELETE_GRADUATION_SUCCESS,
  DELETE_JOB_EXPERIENCE_FAILURE,
  DELETE_JOB_EXPERIENCE_SUCCESS,
  DELETE_LANGUAGE_FAILURE,
  DELETE_LANGUAGE_SUCCESS,
  DELETE_RESUME_COMPLETELY_FAILURE,
  DELETE_RESUME_COMPLETELY_SUCCESS,
  DELETE_TALENT_FAILURE,
  DELETE_TALENT_SUCCESS,
  DELETE_WEB_ADDRESSES_FAILURE,
  DELETE_WEB_ADDRESSES_SUCCESS,
  GET_RESUMES_BY_CANDIDATE_ID_FAILURE,
  GET_RESUMES_BY_CANDIDATE_ID_SUCCESS,
  GET_RESUME_BY_ID_FAILURE,
  GET_RESUME_BY_ID_SUCCESS,
  UPDATE_GRADUATION_FAILURE,
  UPDATE_GRADUATION_SUCCESS,
  UPDATE_JOB_EXPERIENCE_FAILURE,
  UPDATE_JOB_EXPERIENCE_SUCCESS,
  UPDATE_LANGUAGE_FAILURE,
  UPDATE_LANGUAGE_SUCCESS,
  UPDATE_RESUME_HEAD_FAILURE,
  UPDATE_RESUME_HEAD_SUCCESS,
  UPDATE_TALENT_FAILURE,
  UPDATE_TALENT_SUCCESS,
  UPDATE_WEB_ADDRESSES_FAILURE,
  UPDATE_WEB_ADDRESSES_SUCCESS,
} from "../actions/resumeActions";
import { resume, loading, message, resumes } from "../initialValues/resume";

const initialState = {
  resumes: resumes,
  resume: resume,
  message: message,
  loading: loading,
};

export default function resumeReducer(state = initialState, { type, payload }) {
  switch (type) {
    //GET
    case GET_RESUMES_BY_CANDIDATE_ID_SUCCESS:
      return {
        ...state,
        resumes: payload,
        loading: false,
      };
    case GET_RESUMES_BY_CANDIDATE_ID_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case GET_RESUME_BY_ID_SUCCESS:
      return {
        ...state,
        resume: payload,
        loading: false,
      };
    case GET_RESUME_BY_ID_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };

    //ADD
    case ADD_RESUME_HEAD_SUCCESS:
      return {
        ...state,
        resume: payload,
        loading: false,
      };
    case ADD_RESUME_HEAD_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case ADD_RESUME_IMAGE_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          profilePicture: URL.createObjectURL(payload),
        },
        loading: false,
      };
    case ADD_RESUME_IMAGE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case ADD_GRADUATION_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          graduations: [...state.resume.graduations, payload],
        },
        loading: false,
      };
    case ADD_GRADUATION_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case ADD_TALENT_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          talents: [...state.resume.talents, payload],
        },
        loading: false,
      };
    case ADD_TALENT_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };

    case ADD_JOB_EXPERIENCE_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          jobExperiences: [...state.resume.jobExperiences, payload],
        },
        loading: false,
      };
    case ADD_JOB_EXPERIENCE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case ADD_LANGUAGE_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          languages: [...state.resume.languages, payload],
        },
        loading: false,
      };
    case ADD_LANGUAGE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case ADD_WEB_ADDRESSES_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          webAddresses: [...state.resume.webAddresses, payload],
        },
        loading: false,
      };
    case ADD_WEB_ADDRESSES_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };

    //UPDATE
    case UPDATE_RESUME_HEAD_SUCCESS:
      return {
        ...state,
        resume: { ...state.resume, payload },
        loading: false,
      };

    case UPDATE_RESUME_HEAD_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case UPDATE_GRADUATION_SUCCESS:
      let graduationIndex = state.resume.graduations.findIndex(
        (graduation) => graduation.id === payload.id
      );
      return {
        ...state,
        resume:{...state.resume,graduations: state.resume.graduations.map((graduation, i) =>
          i === graduationIndex ? { ...payload } : { ...graduation }
        )}
        ,
        loading: false,
      };
    case UPDATE_GRADUATION_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case UPDATE_JOB_EXPERIENCE_SUCCESS:
      let jobExperienceIndex = state.resume.jobExperiences.findIndex(
        (jobExperience) => jobExperience.id === payload.id
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          jobExperiences: state.resume.jobExperiences.map((jobExperience, i) =>
            i === jobExperienceIndex ? { ...payload } : { ...jobExperience }
          ),
        },
        loading: false,
      };
    case UPDATE_JOB_EXPERIENCE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case UPDATE_TALENT_SUCCESS:
      let talentIndex = state.resume.talents.findIndex(
        (talent) => talent.id === payload.id
      );
      return {
        ...state,
        resume:{...state.resume,talents: state.resume.talents.map((talent, i) =>
          i === talentIndex ? { ...payload } : { ...talent }
        )}
        ,
        loading: false,
      };
    case UPDATE_TALENT_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case UPDATE_LANGUAGE_SUCCESS:
      let languageIndex = state.resume.languages.findIndex(
        (language) => language.id === payload.id
      );
      return {
        ...state,
        resume:{...state.resume,languages: state.resume.languages.map((language, i) =>
          i === languageIndex ? { ...payload } : { ...language }
        )}
        ,
        loading: false,
      };
    case UPDATE_LANGUAGE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case UPDATE_WEB_ADDRESSES_SUCCESS:
      let webAddressIndex = state.resume.languages.findIndex(
        (language) => language.id === payload.id
      );
      return {
        ...state,
        resume:{...state.resume,webAddresses: state.resume.webAddresses.map((webaddress, i) =>
          i === webAddressIndex ? { ...payload } : { ...webaddress }
        )}
        ,
        loading: false,
      };
    case UPDATE_WEB_ADDRESSES_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };

    //DELETE
    case DELETE_RESUME_COMPLETELY_SUCCESS:
      return {
        ...state,
        resumes: state.resumes.filter((resume) => resume.id !== payload),
        loading: false,
      };
    case DELETE_RESUME_COMPLETELY_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };

    case DELETE_GRADUATION_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          graduations: state.resume.graduations.filter(
            (graduation) => graduation.id !== payload
          ),
        },
        loading: false,
      };
    case DELETE_GRADUATION_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case DELETE_JOB_EXPERIENCE_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          jobExperiences: state.resume.jobExperiences.filter(
            (jobExperience) => jobExperience.id !== payload
          ),
        },
        loading: false,
      };
    case DELETE_JOB_EXPERIENCE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case DELETE_TALENT_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          talents: state.resume.talents.filter(
            (talent) => talent.id !== payload
          ),
        },
        loading: false,
      };
    case DELETE_TALENT_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case DELETE_LANGUAGE_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          languages: state.resume.languages.filter(
            (language) => language.id !== payload
          ),
        },
        loading: false,
      };
    case DELETE_LANGUAGE_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case DELETE_WEB_ADDRESSES_SUCCESS:
      return {
        ...state,
        resume: {
          ...state.resume,
          webAddresses: state.resume.webAddresses.filter(
            (webAddress) => webAddress.id !== payload
          ),
        },
        loading: false,
      };
    case DELETE_WEB_ADDRESSES_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    default:
      return state;
  }
}
