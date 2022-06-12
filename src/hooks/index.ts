import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userGeoLoc, lostPetsNearby } from "../atoms";

// LOST PETS NEARBY HOOK
export function usePetsNearby() {
  const itemResult = useRecoilValue(lostPetsNearby);
  return itemResult;
}

export function useLogin() {
  if (!localStorage.userData) {
    return false;
  }
  return true;
}

/* 



export function useModalData() {
  const modalData = useRecoilValue(reportPetData);
  return modalData;
}

export function useSetModalData() {
  const setModalData = useSetRecoilState(reportPetData);
  return setModalData;
} */
/* 
// SEARCH ITEM HOOK
export function useItemResults() {
  const params = useParams();
  const setItemQuery = useSetRecoilState(itemQueryState);

  useEffect(() => {
    setItemQuery(params.id);
  }, [params]);

  const itemResult = useRecoilValue(itemResultState);
  return itemResult;
}
 */
