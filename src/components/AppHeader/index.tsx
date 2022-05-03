import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { LinkText, Parrafo, Subtitle } from "ui/fonts/Fonts";
import css from "./appHeader.css";

export const AppHeader = (props) => {
  const [isToggle, setIsToggle] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  const redirectTo = (path: string) => {
    if (path == "/") {
      navigate(path, { replace: true }), [navigate];
      setIsToggle(false);
    } else {
      navigate(path, { replace: true }), [navigate];
      toggleMenu();
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
          src="https://lost-pets-app.herokuapp.com/pet-paw.79409924.png"
          className={css["paw-image"]}
        ></img>
      </a>

      {
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
      }

      <button onClick={toggleMenu} className={css["hamburger-button"]}>
        <img
          src="https://lost-pets-app.herokuapp.com/menu-icon.9040fb05.png"
          className={css["hamburger-button-image"]}
        ></img>
      </button>
    </header>
  );
};
