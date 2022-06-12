import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { LinkText, Parrafo, ParrafoBold, Subtitle } from "ui/fonts/Fonts";
import { useLogin } from "hooks";
import css from "./appHeader.css";

export const AppHeader = (props) => {
  const [isToggle, setIsToggle] = React.useState(false);
  const isLogged = useLogin();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  const redirectTo = (path: string) => {
    if (isLogged && path != "/") {
      navigate(path, { replace: true }), [navigate];
    } else {
      navigate("auth", { replace: true }), [navigate];
      toggleMenu();
    }

    if (path == "/") {
      navigate(path, { replace: true }), [navigate];
      setIsToggle(false);
    }
  };

  const toggleStyle: CSSProperties = isToggle
    ? {
        right: 0,
      }
    : {};

  return (
    <header className={css["header-comp"]}>
      <a className={css["paw-icon"]} onClick={() => redirectTo("/")}>
        <img
          style={{ marginTop: "5px" }}
          src="./src/assets/pet-hotel-sign-with-a-dog-and-a-cat-under-a-roof-line.png"
          className={css["paw-image"]}
        ></img>
      </a>

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
              <Parrafo>User Email</Parrafo>
              <div className={css["user-data__icon-menu"]}>
                <a onClick={() => redirectTo("/auth")}>
                  <LinkText>INICIAR SESIÓN </LinkText>
                </a>
              </div>

              <img
                src="src/assets/downarrow.png"
                className={css["user-data__img"]}
              ></img>
            </div>
          </div>
        </div>
      </nav>

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
            <a onClick={() => redirectTo("/my-data")}>
              <Subtitle>Mis Datos</Subtitle>
            </a>
            <a onClick={() => redirectTo("/my-pets")}>
              <Subtitle>Mis mascotas reportadas</Subtitle>
            </a>
            <a onClick={() => redirectTo("/report-pet")}>
              <Subtitle>Reportar mascota</Subtitle>
            </a>

            <div className={css["user-data__container"]}>
              <div className={css["user-data__box"]}>
                <img
                  src="https://lost-pets-app.herokuapp.com/user.73783fc8.png"
                  className={css["user-data__img"]}
                ></img>
                <Parrafo>User Email</Parrafo>
              </div>
              <LinkText>Iniciar Sesión</LinkText>
            </div>
          </div>
        </nav>
      </div>

      <button onClick={toggleMenu} className={css["hamburger-button"]}>
        <img
          src="https://lost-pets-app.herokuapp.com/menu-icon.9040fb05.png"
          className={css["hamburger-button-image"]}
        ></img>
      </button>
    </header>
  );
};
