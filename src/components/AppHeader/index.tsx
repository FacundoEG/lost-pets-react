import { userData as localUserData, pageToGo } from "atoms";
import { useLocalUserData } from "hooks";
import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LinkText, Parrafo, ParrafoBold, Subtitle } from "ui/fonts/Fonts";
import css from "./appHeader.css";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { NavLinks } from "./components/NavLinks";

export const AppHeader = () => {
  const [isToggle, setIsToggle] = useState(false);
  const navigate = useNavigate();
  const userData = useLocalUserData();
  const userDataSetter = useSetRecoilState(localUserData);
  const pageToGoSetter = useSetRecoilState(pageToGo);
  const userHasToken = userData?.token ? true : false;

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  const redirectTo = (path: string) => {
    setIsToggle(false);

    if (userHasToken && path != "/") {
      navigate(path, { replace: true }), [navigate];
    } else {
      pageToGoSetter(path);
      navigate("auth", { replace: true }), [navigate];
    }

    if (path == "/") {
      navigate(path, { replace: true }), [navigate];
    }
  };

  return (
    <header className={css["header-comp"]}>
      <a className={css["paw-icon"]} onClick={() => redirectTo("/")}>
        <img
          style={{ marginTop: "5px" }}
          src="./src/assets/petsIcon.png"
          className={css["paw-image"]}
        ></img>
      </a>

      <NavLinks
        redirectTo={redirectTo}
        userData={userData}
        userHasToken={userHasToken}
        userDataSetter={userDataSetter}
      />

      <HamburgerMenu
        redirectTo={redirectTo}
        toggleMenu={toggleMenu}
        isToggle={isToggle}
        userData={userData}
        userHasToken={userHasToken}
        userDataSetter={userDataSetter}
      />

      <button onClick={toggleMenu} className={css["hamburger-button"]}>
        <img
          src="./src/assets/menu-icon.png"
          className={css["hamburger-button-image"]}
        ></img>
      </button>
    </header>
  );
};
