import React, { CSSProperties } from "react";
import { Subtitle, Parrafo, LinkText } from "ui/fonts/Fonts";
import css from "../appHeader.css";

export function HamburgerMenu({
  redirectTo,
  toggleMenu,
  isToggle,
  userData,
  userHasToken,
  userDataSetter,
}) {
  const toggleStyle: CSSProperties = isToggle
    ? {
        right: 0,
      }
    : {};

  return (
    <div className={css["hamburger-menu"]}>
      <nav className={css["header-comp__window-menu"]} style={toggleStyle}>
        <button
          onClick={toggleMenu}
          className={css["header-comp__window-closebutton"]}
        >
          <img
            src="https://lost-pets-app.herokuapp.com/x-mark-white.42bb5c39.png"
            className={css["header-comp__window-closebutton__img"]}
          ></img>
        </button>

        <div className={css["header-comp__window-menu-link"]}>
          <a
            onClick={() => {
              {
                redirectTo("/my-data");
              }
            }}
          >
            <Subtitle>Mis Datos</Subtitle>
          </a>
          <a
            onClick={() => {
              {
                redirectTo("/my-pets");
              }
            }}
          >
            <Subtitle>Mis mascotas reportadas</Subtitle>
          </a>
          <a
            onClick={() => {
              {
                redirectTo("/report-pet");
              }
            }}
          >
            <Subtitle>Reportar mascota</Subtitle>
          </a>

          <div className={css["user-data__container"]}>
            <div className={css["user-data__box"]}>
              <img
                src="https://lost-pets-app.herokuapp.com/user.73783fc8.png"
                className={css["user-data__img"]}
              ></img>
              <Parrafo>{userData?.name ? userData?.name : "Invitadx"}</Parrafo>
            </div>
            {userHasToken ? (
              <a
                onClick={() => {
                  localStorage.removeItem("userData"), redirectTo("/");
                  userDataSetter(null);
                }}
              >
                <LinkText>CERRAR SESIÓN </LinkText>
              </a>
            ) : (
              <a
                onClick={() => {
                  redirectTo("/auth");
                }}
              >
                <LinkText>INICIAR SESIÓN </LinkText>
              </a>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
