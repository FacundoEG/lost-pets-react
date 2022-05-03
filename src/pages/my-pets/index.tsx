import React from "react";
import css from "./home.css";
import { HomeTitle } from "ui/fonts/Fonts";
export const MyPets = () => {
  return (
    <div className={css["welcome-container"]}>
      <section className="main-conteiner"> </section>
      <HomeTitle>Mis Mascotas Reportadas</HomeTitle>
    </div>
  );
};
