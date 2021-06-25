import axios from "axios";

export default class SkillService {
  getSkillsById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerskills/getAllByJobSeekerId?jobSeekerId=" +
        id
    );
  }

  updateSkill(id, skill) {
    return axios.post(
      "http://localhost:8080/api/jobseekerskills/update?id=" + id,
      skill
    );
  }
}
