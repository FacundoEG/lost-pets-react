const API_BASE_URL = "https://lost-pets-app.herokuapp.com";

export function test() {
  return fetch(API_BASE_URL + "/test", {
    method: "get",
  })
    .then((res) => {
      return res.json();
    })
    .then((finalres) => {
      return finalres;
    });
}

export async function getLostPetsByGeo({ lat, lng }) {
  return await (
    await fetch(API_BASE_URL + `/pets/getbygeo?lat=${lat}&lng=${lng}`, {
      method: "get",
    })
  ).json();
}

export async function sendPetReportInfo(reportData) {
  return await (
    await fetch(API_BASE_URL + "/pets/report", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reportData),
    })
  ).json();
}

export async function emailCheck(emailData) {
  return await (
    await fetch(API_BASE_URL + "/auth", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(emailData),
    })
  ).json();
}

export async function getAuthToken(loginData) {
  return await (
    await fetch(API_BASE_URL + "/auth/token", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loginData),
    })
  ).json();
}

export async function getUserData(userToken) {
  return await (
    await fetch(API_BASE_URL + `/user/data`, {
      method: "get",
      headers: {
        Authorization: `bearer ${userToken}`,
      },
    })
  ).json();
}

export async function createUser(userData) {
  return await (
    await fetch(API_BASE_URL + "/user", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    })
  ).json();
}

export async function updateUserData(updateData, userToken) {
  return await (
    await fetch(API_BASE_URL + `/user/data`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${userToken}`,
      },
      body: JSON.stringify(updateData),
    })
  ).json();
}

export async function getReportedPetsByUser(userToken) {
  return await (
    await fetch(API_BASE_URL + `/user/pets`, {
      method: "get",
      headers: {
        Authorization: `bearer ${userToken}`,
      },
    })
  ).json();
}
