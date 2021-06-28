import axios from "axios";

export default class EducationSerivce {
  updateEducation(id, education) {
    return axios.post(
      "http://localhost:8080/api/jobseekereducations/update?id=" + id,
      education
    );
  }

  getEducationsById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekereducations/getAllByJobSeekerIdOrderByGraduationDateDesc?jobSeekerId=" +
        id
    );
  }
}
