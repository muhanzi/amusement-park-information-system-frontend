import { API_BASE_URL, ACCESS_TOKEN } from "./constants.js";

class ApiUtils {
  request = options => {
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers.append(
        "Authorization",
        "Bearer " + localStorage.getItem(ACCESS_TOKEN)
      );
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options).then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
  };

  login(loginRequest) {
    return this.request({
      url: API_BASE_URL + "/auth/signin",
      method: "POST",
      body: JSON.stringify(loginRequest)
    });
  }

  signup(signupRequest) {
    return this.request({
      url: API_BASE_URL + "/auth/signup",
      method: "POST",
      body: JSON.stringify(signupRequest)
    });
  }

  AdminSignup(signupRequest) {
    // use this function incase the user will be an Admin
    return this.request({
      url: API_BASE_URL + "/auth/signupAdmin",
      method: "POST",
      body: JSON.stringify(signupRequest)
    });
  }

  checkUsernameAvailability(username) {
    return this.request({
      url:
        API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
      method: "GET"
    });
  }

  checkEmailAvailability(email) {
    return this.request({
      url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
      method: "GET"
    });
  }

  getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      return Promise.reject("No access token set.");
    }

    return this.request({
      url: API_BASE_URL + "/user/me",
      method: "GET"
    });
  }

  getCurrentUserAdmin() {
    // check if the current user is an Admin
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      return Promise.reject("No access token set.");
    }

    return this.request({
      url: API_BASE_URL + "/user/admin",
      method: "GET"
    });
  }

  /*
      
      export function getUserProfile(username) {   // gives us some more details about the user 
        return request({
          url: API_BASE_URL + "/users/" + username,
          method: "GET"
        });
      }
      */

  Logout() {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  saveTicket(ticket) {
    return this.request({
      url: API_BASE_URL + "/ticket/addToTicket",
      method: "POST",
      body: JSON.stringify(ticket)
    });
  }

  showTicket(ticketID) {
    return this.request({
      url: API_BASE_URL + "/ticket/showTicket?ticketID=" + ticketID,
      method: "GET"
    });
  }

  addNewProgram(program) {
    return this.request({
      url: API_BASE_URL + "/program/addNewProgram",
      method: "POST",
      body: JSON.stringify(program)
    });
  }

  deleteProgram(programID) {
    // programID won't be a JS object // it just a value
    return this.request({
      url: API_BASE_URL + "/program/deleteProgram?programID=" + programID,
      method: "POST"
    });
  }
  AllPrograms() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      return Promise.reject("No access token set.");
    }

    return this.request({
      url: API_BASE_URL + "/program/allPrograms",
      method: "GET"
    });
  }
  showOneProgram(programID) {
    return this.request({
      url: API_BASE_URL + "/program/showOneProgram?programID=" + programID,
      method: "GET"
    });
  }
}

export default ApiUtils;
