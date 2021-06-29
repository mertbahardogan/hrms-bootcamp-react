import axios from "axios";

export default class JobAdvertisementService {
  getAdverts() {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActive"
    );
  }

  getAdvertsByIsActiveAndIsApproved() {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndIsApproved"
    );
  }

  getAdvertsIsActiveAndApprovedByPage(pageNumber, pageSize) {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndIsApprovedOrderByReleaseDateDescByPage?pageNumber=" +
        pageNumber +
        "&pageSize=" +
        pageSize
    );
  }

  getAdvertsByIsActiveAndIsApprovedOrdered() {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndIsApprovedOrderByReleaseDateDesc"
    );
  }

  getAdvertsByJobPositionId(jobPositionId) {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndIsApprovedAndJob_Position_Id?jobPositionId=" +
        jobPositionId
    );
  }

  getAdvertsByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndIsApprovedAndEmployer_Id?employerId=" +
        employerId
    );
  }

  getAdvertByIsActiveAndId(advertId) {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndId?id=" +
        advertId
    );
  }

  getAdvertByIsActiveAndCompanyName(companyName) {
    return axios.get(
      "http://localhost:8080/api/job_advertisements/getByIsActiveAndEmployer_CompanyName?companyName=" +
        companyName
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
