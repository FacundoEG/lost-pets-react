import React from "react";
import { NavLink } from "react-router-dom";
import { ParrafoBold, Parrafo, LinkText } from "ui/fonts/Fonts";
import css from "../appHeader.css";

export function NavLinks({
  redirectTo,
  userData,
  userHasToken,
  userDataSetter,
}) {
  return (
    <nav className={css["header-nav"]}>
      <div className={css["header-nav-links"]}>
        <a onClick={() => redirectTo("/my-data")}>
          <ParrafoBold>Mis Datos</ParrafoBold>
        </a>
        <a onClick={() => redirectTo("/my-pets")}>
          <ParrafoBold>Mis mascotas reportadas</ParrafoBold>
        </a>
        <a onClick={() => redirectTo("/report-pet")}>
          <ParrafoBold>Reportar mascota</ParrafoBold>
        </a>
        <div className={css["user-data__container"]}>
          <div className={css["user-data__box"]}>
            <img
              src="https://lost-pets-app.herokuapp.com/user.73783fc8.png"
              className={css["user-data__img"]}
            ></img>
            <Parrafo>{userData?.name ? userData?.name : "Invitadx"}</Parrafo>
            <div className={css["user-data__icon-menu"]}>
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
                <a onClick={() => redirectTo("/auth")}>
                  <LinkText>INICIAR SESIÓN </LinkText>
                </a>
              )}
            </div>

            <img
              src="src/assets/downarrow.png"
              className={css["user-data__img"]}
            ></img>
          </div>
        </div>
      </div>
    </nav>
  );
}
