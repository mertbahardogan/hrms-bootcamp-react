import axios from "axios";

export default class LinkService {
  updateLinks(id, link) {
    return axios.post(
      "http://localhost:8080/api/jobseekerlinks/update?id=" + id,
      link
    );
  }

  getLinksById(id) {
    return axios.get(
      " http://localhost:8080/api/jobseekerlinks/getAllByJobSeekerId?jobSeekerId=" +
        id
    );
  }
}
