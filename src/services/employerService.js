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

  updateCompany(id, employer) {
    return axios.post(
      "http://localhost:8080/api/employers/update?id=" + id,
      employer
    );
  }

  getOldEmployerById(id) {
    return axios.get(
      "http://localhost:8080/api/oldEmployers/getbyEmployerid?id=" + id
    );
  }
}
