import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getAll");
  }

  getEmployerById(id) {
    return axios.get(
      "http://localhost:8080/api/employers/getEmployerById?id=" + id
    );
  }

  getByIdForUsers(id) {
    return axios.get(
      "http://localhost:8080/api/employers/getByIdForUsers?id=" + id
    );
  }
  getByIdForAdmins(id) {
    return axios.get(
      "http://localhost:8080/api/employers/getByIdForAdmins?id=" + id
    );
  }

  confirmUpdate(employer, id) {
    return axios.post(
      "http://localhost:8080/api/employers/ConfirmUpdate?EmployerId=" + id,
      employer
    );
  }

  getEmployerCases() {
    return axios.get("http://localhost:8080/api/employerCases/getall");
  }

  updateCompany(id, employer) {
    return axios.post(
      "http://localhost:8080/api/employers/update?id=" + id,
      employer
    );
  }
}
