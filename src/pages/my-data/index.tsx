import React from "react";
import css from "./home.css";
import { Caption, HomeTitle } from "ui/fonts/Fonts";
import { EditForm } from "components/EditForm";
export const MyData = () => {
  return (
    <div className={css["welcome-container"]}>
      <section className="main-conteiner"> </section>
      <HomeTitle>Mis Datos</HomeTitle>
      <EditForm />
    </div>
  );
};
