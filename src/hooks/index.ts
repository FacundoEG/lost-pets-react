import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { lostPetsNearby, localUserData, userData } from "../atoms";

export function usePetsNearby() {
  const itemResult = useRecoilValue(lostPetsNearby);
  return itemResult;
}

export function useLocalUserData() {
  const userLocalData = useRecoilValue(localUserData);
  return userLocalData;
}

export function useLocalStorageData() {
  const setUserGlobalData = useSetRecoilState(userData);

  useEffect(() => {
    const localUserData = localStorage.userData;

    if (localUserData) {
      setUserGlobalData(JSON.parse(localUserData));
    }
  }, []);
}
