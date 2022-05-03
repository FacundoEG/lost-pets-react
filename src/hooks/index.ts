import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userGeoLoc, lostPetsNearby } from "../atoms";

// LOST PETS NEARBY HOOK
export function usePetsNearby() {
  const itemResult = useRecoilValue(lostPetsNearby);
  return itemResult;
}
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
