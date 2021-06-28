import axios from "axios";

export default class PictureService {
  getPictureById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerpictures/getAllByJobSeekerId?jobSeekerId=" +
        id
    );
  }
}
