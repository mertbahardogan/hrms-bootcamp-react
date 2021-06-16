import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisements() {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActive"
    );
  }

  getAdvertByIsActiveAndId(advertId) {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndId?id=" +
        advertId
    );
  }

  add(advertPosting) {
    return axios.post(
      "http://localhost:8080/api/job_advertisements/add",
      advertPosting
    );
  }

  getAllByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getAllByEmployerId?employerId=" +
        employerId
    );
  }

  getAllByIsApproved() {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getAllByIsApproved"
    );
  }
  getAllByIsNotApproved() {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getAllByIsNotApproved"
    );
  }

  approveJobAdvertisement(advertId) {
    return axios.put(
      "http://localhost:8080/api/job_advertisements/approveJobAdvertisement?jobAdvertisementId=" +
        advertId
    );
  }

  openJobAdvertisement(advertId) {
    return axios.put(
      "http://localhost:8080/api/job_advertisements/openJobAdvertisement?jobAdvertisementId=" +
        advertId
    );
  }
  closeJobAdvertisement(advertId) {
    return axios.put(
      "http://localhost:8080/api/job_advertisements/closeJobAdvertisement?jobAdvertisementId=" +
        advertId
    );
  }
}
