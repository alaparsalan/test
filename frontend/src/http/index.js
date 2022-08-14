import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/";

const Request = ({ token, url, data = {}, type, isMulti = false }) => {
  const headers = {};
  if (token) axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  if (isMulti) headers["Content-Type"] = `multipart/form-data`;
  return axios[type](url, data, headers);
};

export { Request };
