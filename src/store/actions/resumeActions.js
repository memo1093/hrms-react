import { toast } from "react-toastify";
import ResumeService from "../../services/ResumeService";

export const GET_RESUME_BY_ID_SUCCESS = "GET_RESUME_BY_ID_SUCCESS";
export const GET_RESUME_BY_ID_FAILURE = "GET_RESUME_BY_ID_FAILURE";
export const GET_RESUMES_BY_CANDIDATE_ID_SUCCESS =
  "GET_RESUMES_BY_CANDIDATE_ID_SUCCESS";
export const GET_RESUMES_BY_CANDIDATE_ID_FAILURE =
  "GET_RESUMES_BY_CANDIDATE_ID_FAILURE";

export const ADD_RESUME_HEAD_SUCCESS = "ADD_RESUME_HEAD_SUCCESS";
export const ADD_RESUME_HEAD_FAILURE = "ADD_RESUME_HEAD_FAILURE";
export const ADD_GRADUATION_SUCCESS = "ADD_GRADUATION_SUCCESS";
export const ADD_GRADUATION_FAILURE = "ADD_GRADUATION_FAILURE";
export const ADD_TALENT_SUCCESS = "ADD_TALENT_SUCCESS";
export const ADD_TALENT_FAILURE = "ADD_TALENT_FAILURE";
export const ADD_JOB_EXPERIENCE_SUCCESS = "ADD_JOB_EXPERIENCE_SUCCESS";
export const ADD_JOB_EXPERIENCE_FAILURE = "ADD_JOB_EXPERIENCE_FAILURE";
export const ADD_LANGUAGE_SUCCESS = "ADD_LANGUAGE_SUCCESS";
export const ADD_LANGUAGE_FAILURE = "ADD_LANGUAGE_FAILURE";
export const ADD_WEB_ADDRESSES_SUCCESS = "ADD_WEB_ADDRESSES_SUCCESS";
export const ADD_WEB_ADDRESSES_FAILURE = "ADD_WEB_ADDRESSES_FAILURE";
export const ADD_RESUME_IMAGE_SUCCESS = "ADD_RESUME_IMAGE_SUCCESS";
export const ADD_RESUME_IMAGE_FAILURE = "ADD_RESUME_IMAGE_FAILURE";

export const UPDATE_RESUME_HEAD_SUCCESS = "UPDATE_RESUME_HEAD_SUCCESS";
export const UPDATE_RESUME_HEAD_FAILURE = "UPDATE_RESUME_HEAD_FAILURE";
export const UPDATE_GRADUATION_SUCCESS = "UPDATE_GRADUATION_SUCCESS";
export const UPDATE_GRADUATION_FAILURE = "UPDATE_GRADUATION_FAILURE";
export const UPDATE_TALENT_SUCCESS = "UPDATE_TALENT_SUCCESS";
export const UPDATE_TALENT_FAILURE = "UPDATE_TALENT_FAILURE";
export const UPDATE_JOB_EXPERIENCE_SUCCESS = "UPDATE_JOB_EXPERIENCE_SUCCESS";
export const UPDATE_JOB_EXPERIENCE_FAILURE = "UPDATE_JOB_EXPERIENCE_FAILURE";
export const UPDATE_LANGUAGE_SUCCESS = "UPDATE_LANGUAGE_SUCCESS";
export const UPDATE_LANGUAGE_FAILURE = "UPDATE_LANGUAGE_FAILURE";
export const UPDATE_WEB_ADDRESSES_SUCCESS = "UPDATE_WEB_ADDRESSES_SUCCESS";
export const UPDATE_WEB_ADDRESSES_FAILURE = "UPDATE_WEB_ADDRESSES_FAILURE";

export const DELETE_RESUME_COMPLETELY_SUCCESS =
  "DELETE_RESUME_COMPLETELY_SUCCESS";
export const DELETE_RESUME_COMPLETELY_FAILURE =
  "DELETE_RESUME_COMPLETELY_FAILURE";
export const DELETE_GRADUATION_SUCCESS = "DELETE_GRADUATION_SUCCESS";
export const DELETE_GRADUATION_FAILURE = "DELETE_GRADUATION_FAILURE";
export const DELETE_TALENT_SUCCESS = "DELETE_TALENT_SUCCESS";
export const DELETE_TALENT_FAILURE = "DELETE_TALENT_FAILURE";
export const DELETE_JOB_EXPERIENCE_SUCCESS = "DELETE_JOB_EXPERIENCE_SUCCESS";
export const DELETE_JOB_EXPERIENCE_FAILURE = "DELETE_JOB_EXPERIENCE_FAILURE";
export const DELETE_LANGUAGE_SUCCESS = "DELETE_LANGUAGE_SUCCESS";
export const DELETE_LANGUAGE_FAILURE = "DELETE_LANGUAGE_FAILURE";
export const DELETE_WEB_ADDRESSES_SUCCESS = "DELETE_WEB_ADDRESSES_SUCCESS";
export const DELETE_WEB_ADDRESSES_FAILURE = "DELETE_WEB_ADDRESSES_FAILURE";

let resumeService = new ResumeService();

//Get Actions
export const getResumeById = (resumeId) => async (dispatch) => {
  await resumeService
    .getById(resumeId)
    .then((response) =>
      dispatch({
        type: GET_RESUME_BY_ID_SUCCESS,
        payload: response.data.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_RESUME_BY_ID_FAILURE,
        payload: error.message,
      })
    );
};
export const getResumesByCandidateId = (canidateId) => async (dispatch) => {
  await resumeService
    .getByCandidateId(canidateId)
    .then((response) =>
      dispatch({
        type: GET_RESUMES_BY_CANDIDATE_ID_SUCCESS,
        payload: response.data.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_RESUMES_BY_CANDIDATE_ID_SUCCESS,
        payload: error.message,
      })
    );
};

//Add Actions
export const addResumeImage = (formData,setImageLoading) => async (dispatch) => {
  await resumeService
    .addOrUpdateImage(formData,setImageLoading)
    .then((result) => {
      toast.success("Profil fotoğrafı ekleme işlemi başarılı");

      dispatch({
        type: ADD_RESUME_IMAGE_SUCCESS,
        payload: formData.get("file"),
      });
    })
    .catch((error) => {
      toast.error("Resim yüklenemedi");
      dispatch({
        type: ADD_RESUME_IMAGE_FAILURE,
        payload: error.message,
      });
    });
};
export const addResumeHead = (resumeHead) => async (dispatch) => {
  await resumeService
    .addOrUpdateResumeHead(resumeHead)
    .then((result) => {
      toast.success("Özgeçmiş giriş kısmı ekleme işlemi başarılı");

      dispatch({
        type: ADD_RESUME_HEAD_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");

      dispatch({
        type: ADD_RESUME_HEAD_FAILURE,
        payload: error.message,
      });
    });
};
export const addGraduation = (graduation) => async (dispatch) => {
  await resumeService
    .addOrUpdateGraduation(graduation)
    .then((result) => {
      toast.success("Mezuniyet bilgisi eklendi");

      dispatch({
        type: ADD_GRADUATION_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: ADD_GRADUATION_FAILURE,
        payload: error.message,
      });
    });
};
export const addTalent = (talent) => async (dispatch) => {
  await resumeService
    .addOrUpdateTalent(talent)
    .then((result) => {
      toast.success("Yetenek bilgisi eklendi");

      dispatch({
        type: ADD_TALENT_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: ADD_TALENT_FAILURE,
        payload: error.message,
      });
    });
};
export const addJobExperience = (jobExperience) => async (dispatch) => {
  await resumeService
    .addOrUpdateJobExperience(jobExperience)
    .then((result) => {
      toast.success("İş tecrübesi eklendi");
      dispatch({
        type: ADD_JOB_EXPERIENCE_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: ADD_JOB_EXPERIENCE_FAILURE,
        payload: error.message,
      });
    });
};
export const addLanguage = (language) => async (dispatch) => {
  await resumeService
    .addOrUpdateLanguage(language)
    .then((result) => {
      toast.success("Dil bilgisi eklendi");
      dispatch({
        type: ADD_LANGUAGE_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: ADD_LANGUAGE_FAILURE,
        payload: error.message,
      });
    });
};
export const addWebAdresses = (webAdresses) => async (dispatch) => {
  await resumeService
    .addOrUpdateWebAddresses(webAdresses)
    .then((result) => {
      toast.success("Web adresleri eklendi");

      dispatch({
        type: ADD_WEB_ADDRESSES_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: ADD_WEB_ADDRESSES_FAILURE,
        payload: error.message,
      });
    });
};

//Update Actions
export const updateResumeHead = (resumeHead) => async (dispatch) => {
  await resumeService
    .addOrUpdateResumeHead(resumeHead)
    .then((response) => {
      toast.success("Güncelleme işlemi başarılı");

      dispatch({
        type: UPDATE_RESUME_HEAD_SUCCESS,
        payload: resumeHead,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");

      dispatch({
        type: UPDATE_RESUME_HEAD_FAILURE,
        payload: error.message,
      });
    });
};

export const updateGraduation = (graduation) => async (dispatch) => {
  await resumeService
    .addOrUpdateGraduation(graduation)
    .then((response) => {
      toast.success("Mezuniyet bilgisi güncellendi");

      dispatch({
        type: UPDATE_GRADUATION_SUCCESS,
        payload: graduation,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");

      dispatch({
        type: UPDATE_GRADUATION_FAILURE,
        payload: error.message,
      });
    });
};
export const updateTalent = (talent) => async (dispatch) => {
  await resumeService
    .addOrUpdateTalent(talent)
    .then((response) => {
      toast.success("Yetenek bilgisi güncellendi");
      dispatch({
        type: UPDATE_TALENT_SUCCESS,
        payload: talent,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: UPDATE_TALENT_FAILURE,
        payload: error.message,
      });
    });
};
export const updateJobExperience = (jobExperience) => async (dispatch) => {
  await resumeService
    .addOrUpdateJobExperience(jobExperience)
    .then((response) => {
      toast.success("İş tecrübesi güncellendi");
      dispatch({
        type: UPDATE_JOB_EXPERIENCE_SUCCESS,
        payload: jobExperience,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: UPDATE_JOB_EXPERIENCE_FAILURE,
        payload: error.message,
      });
    });
};
export const updateLanguage = (language) => async (dispatch) => {
  await resumeService
    .addOrUpdateLanguage(language)
    .then((response) => {
      toast.success("Dil bilgisi güncellendi");

      dispatch({
        type: UPDATE_LANGUAGE_SUCCESS,
        payload: language,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: UPDATE_LANGUAGE_FAILURE,
        payload: error.message,
      });
    });
};
export const updatewebAddresses = (webAdresses) => async (dispatch) => {
  await resumeService
    .addOrUpdateWebAddresses(webAdresses)
    .then((response) => {
      toast.success("Web adresleri güncellendi");

      dispatch({
        type: UPDATE_WEB_ADDRESSES_SUCCESS,
        payload: webAdresses,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");

      dispatch({
        type: UPDATE_WEB_ADDRESSES_FAILURE,
        payload: error.message,
      });
    });
};
//Delete Actions
export const deleteResumeCompletely = (resumeId) => async (dispatch) => {
  await resumeService
    .deleteResume(resumeId)
    .then((response) => {
      toast.warn(`Özgeçmiş silindi`);

      dispatch({
        type: DELETE_RESUME_COMPLETELY_SUCCESS,
        payload: resumeId,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");

      dispatch({
        type: DELETE_RESUME_COMPLETELY_FAILURE,
        payload: error.message,
      });
    });
};
export const deleteGraduation = (graduationId) => async (dispatch) => {
  await resumeService
    .deleteGraduation(graduationId)
    .then((response) => {
      toast.warn("Mezuniyet bilgisi kaldırıldı");

      dispatch({
        type: DELETE_GRADUATION_SUCCESS,
        payload: graduationId,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: DELETE_GRADUATION_FAILURE,
        payload: error.message,
      });
    });
};
export const deleteTalent = (talentId) => async (dispatch) => {
  await resumeService
    .deleteTalent(talentId)
    .then((response) => {
      toast.warn("Yetenek bilgisi kaldırıldı");

      dispatch({
        type: DELETE_TALENT_SUCCESS,
        payload: talentId,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: DELETE_TALENT_FAILURE,
        payload: error.message,
      });
    });
};
export const deleteJobExperience = (jobExperienceId) => async (dispatch) => {
  await resumeService
    .deleteJobExperience(jobExperienceId)
    .then((response) => {
      toast.warn("Yetenek bilgisi kaldırıldı");

      dispatch({
        type: DELETE_JOB_EXPERIENCE_SUCCESS,
        payload: jobExperienceId,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: DELETE_JOB_EXPERIENCE_FAILURE,
        payload: error.message,
      });
    });
};
export const deleteLanguage = (languageId) => async (dispatch) => {
  await resumeService
    .deleteLanguage(languageId)
    .then((response) => {
      toast.warn("Dil bilgisi kaldırıldı");

      dispatch({
        type: DELETE_LANGUAGE_SUCCESS,
        payload: languageId,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");
      dispatch({
        type: DELETE_LANGUAGE_FAILURE,
        payload: error.message,
      });
    });
};
export const deleteWebAdresses = (webAddressId) => async (dispatch) => {
  await resumeService
    .deleteWebAdresses(webAddressId)
    .then((response) => {
      toast.warn("İnternet siteleri kaldırıldı");

      dispatch({
        type: DELETE_WEB_ADDRESSES_SUCCESS,
        payload: webAddressId,
      });
    })
    .catch((error) => {
      toast.error("Beklenmedik bir hata oluştu");

      dispatch({
        type: DELETE_WEB_ADDRESSES_FAILURE,
        payload: error.message,
      });
    });
};
