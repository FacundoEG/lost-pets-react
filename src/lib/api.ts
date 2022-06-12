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

export function getLostPetsByGeo({ lat, lng }) {
  return fetch(API_BASE_URL + `/pets/getbygeo?lat=${lat}&lng=${lng}`, {
    method: "get",
  })
    .then((res) => {
      return res.json();
    })
    .then((finalres) => {
      return finalres;
    });
}

export function sendPetReportInfo(reportData) {
  return fetch(API_BASE_URL + "/pets/report", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(reportData),
  })
    .then((res) => {
      return res.json();
    })
    .then((finalres) => {
      return finalres;
    });
}

export async function sendPetReportInfoTest(reportData) {
  return await (
    await fetch(API_BASE_URL + "/pets/report", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reportData),
    })
  ).json();
}
