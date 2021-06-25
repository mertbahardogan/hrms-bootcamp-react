import axios from "axios";

export default class JobSeekerService {
  getJobSeekers() {
    return axios.get("http://localhost:8080/api/job_seekers/getAll");
  }

  getJobSeekerById(jobSeekerId) {
    return axios.get(
      "http://localhost:8080/api/job_seekers/getById?jobSeekerId=" + jobSeekerId
    );
  }

  getJobSeekerResume(jobSeekerId) {
    return axios.get(
      "http://localhost:8080/api/job_seekers/getResumeByJobSeekerId?jobSeekerId=" +
        jobSeekerId
    );
  }
}
