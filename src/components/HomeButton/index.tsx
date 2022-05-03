import React from "react";
import { MainButton } from "ui/buttons/Buttons";
import { useSetRecoilState } from "recoil";
import { userGeoLoc } from "atoms";

export function HomeButton({ children }) {
  const setNewGeoLoc = useSetRecoilState(userGeoLoc);
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setNewGeoLoc({ lat, lng });
    });
  };

  return <MainButton onClick={handleClick}>{children}</MainButton>;
}
