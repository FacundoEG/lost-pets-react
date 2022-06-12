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
/* 
export const reportPetData = atom({
  key: "reportPetData",
  default: {},
});

export const petToReportData = selector({
  key: "petToReportData",
  get: async ({ get }) => {
    const petData = get(reportPetData);
    return petData;
  },
}); */

/* 
export const itemQueryState = atom({
  key: "itemQuery",
  default: "",
});

export const itemResultState = selector({
  key: "itemResult",
  get: async ({ get }) => {
    const itemQueryValue = get(itemQueryState);
    if (itemQueryValue) {
      const res = await fetch(
        "https://api.mercadolibre.com/items/" + itemQueryValue
      );
      const itemData = await res.json();
      return itemData;
    } else return undefined;
  },
}); */
