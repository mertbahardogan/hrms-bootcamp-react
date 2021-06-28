import axios from "axios";

export default class ExperienceService {
  updateExperience(id, experience) {
    return axios.post(
      "http://localhost:8080/api/jobseekerexperiences/update?id=" + id,
      experience
    );
  }

  getExperiencesById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerexperiences/getAllByJobSeekerIdOrderByEndDateDesc?jobSeekerId=" +
        id
    );
  }
}
