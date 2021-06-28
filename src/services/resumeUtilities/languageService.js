import axios from "axios";

export default class LanguageService {
  updateLanuages(id, language) {
    return axios.post("http://localhost:8080/api/jobseekerlanguages/update?id=" + id, language);
  }

  getLanguagesById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerlanguages/getAllByJobSeekerId?jobSeekerId=" +
        id
    );
  }
}
