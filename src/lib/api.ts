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
