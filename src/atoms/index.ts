import { atom, selector } from "recoil";
import { getLostPetsByGeo } from "lib/api";

export const userGeoLoc = atom({
  key: "userGeoLoc",
  default: undefined,
});

export const lostPetsNearby = selector({
  key: "losPetsNearby",
  get: async ({ get }) => {
    const currentGeoLoc = get(userGeoLoc);
    if (currentGeoLoc) {
      const petsArray = await getLostPetsByGeo(currentGeoLoc);
      return petsArray.findedPets;
    } else undefined;
  },
});

export const loginToken = atom({
  key: "authToken",
  default: {},
});

export const authToken = selector({
  key: "authTokenCheck",
  get: async ({ get }) => {
    const token = get(loginToken);
    if (token) {
      localStorage.setItem("userData", JSON.stringify({ token: token }));
      return token;
    } else undefined;
  },
});

export const userData = atom({
  key: "userData",
  default: null,
});

export const localUserData = selector({
  key: "localUserData",
  get: async ({ get }) => {
    const localData = get(userData);

    if (!localData) {
      return null;
    }

    if (localData) {
      localStorage.setItem("userData", JSON.stringify(localData));
      return localData;
    } else undefined;
  },
});

export const pageToGo = atom({
  key: "pageToGo",
  default: undefined,
});
