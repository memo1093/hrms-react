import axios from "axios";

export default class ResumeService {
  // Resume get
  getByCandidateId(candidateId) {
    return axios.get(
      `http://localhost:8080/api/resumes/getByCandidateId?id=${candidateId}`
    );
  }
  getById(id) {
    return axios.get(`http://localhost:8080/api/resumes/getById?id=${id}`);
  }

  //Resume addOrUpdate methods
  addOrUpdateResumeHead(resume) {
    return axios.post(`http://localhost:8080/api/resumes/addResume`, resume);
  }
  addOrUpdateGraduation(graduation) {
    return axios.post(
      `http://localhost:8080/api/resumes/addOrUpdateGraduation`,
      graduation
    );
  }
  addOrUpdateTalent(talent) {
    return axios.post(
      `http://localhost:8080/api/resumes/addOrUpdateTalent`,
      talent
    );
  }
  addOrUpdateJobExperience(jobExperience) {
    return axios.post(
      `http://localhost:8080/api/resumes/addOrUpdateJobExperience`,
      jobExperience
    );
  }
  addOrUpdateLanguage(language) {
    return axios.post(
      `http://localhost:8080/api/resumes/addOrUpdateLanguage`,
      language
    );
  }
  addOrUpdateWebAddresses(webAdresses) {
    return axios.post(
      `http://localhost:8080/api/resumes/addOrUpdateWebAddress`,
      webAdresses
    );
  }
  addOrUpdateImage(formData) {
    return axios.post(
      `http://localhost:8080/api/resumes/addOrUpdateProfilePicture`,
      formData
    );
  }
  //Resume delete methods
  deleteResume(id) {
    return axios.delete(
      `http://localhost:8080/api/resumes/deleteResume?id=${id}`
    );
  }
  deleteGraduation(graduationId) {
    return axios.delete(
      `http://localhost:8080/api/resumes/deleteGraduation?graduationId=${graduationId}`
    );
  }
  deleteTalent(talentId) {
    return axios.delete(
      `http://localhost:8080/api/resumes/deleteTalent?talentId=${talentId}`
    );
  }
  deleteLanguage(languageId) {
    return axios.delete(
      `http://localhost:8080/api/resumes/deleteLanguage?languageId=${languageId}`
    );
  }
  deleteJobExperience(jobExperienceId) {
    return axios.delete(
      `http://localhost:8080/api/resumes/deleteJobExperience?jobExperienceId=${jobExperienceId}`
    );
  }
  deleteWebAdresses(webAddressId) {
    return axios.delete(
      `http://localhost:8080/api/resumes/deleteWebAddress?webAddressId=${webAddressId}`
    );
  }
}
