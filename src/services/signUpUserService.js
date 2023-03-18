import http from "./httpServiceUser";

export function signUpUser(data) {
  return http.post("/register", data);
}
