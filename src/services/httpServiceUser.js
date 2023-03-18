import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/user";

const http = {
  get: axios.get,
  delete: axios.delete,
  post: axios.post,
  put: axios.put,
};
export default http;
