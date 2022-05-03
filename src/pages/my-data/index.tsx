import React from "react";
import css from "./home.css";
import { HomeTitle } from "ui/fonts/Fonts";
export const MyData = () => {
  return (
    <div className={css["welcome-container"]}>
      <section className="main-conteiner"> </section>
      <HomeTitle>Mis Datos</HomeTitle>
    </div>
  );
};
