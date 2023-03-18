import http from "./httpServiceUser";

export function loginUser(data) {
  return http.post("/login", data);
}
