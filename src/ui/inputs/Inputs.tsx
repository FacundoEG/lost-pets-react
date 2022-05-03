import React from "react";
import { SemiBold } from "ui/fonts/Fonts";
import css from "./inputs.css";

export function MlFormInput() {
  return (
    <input
      className={css["ml-input"]}
      type="text"
      name="search"
      autoComplete="off"
      placeholder="Tu busqueda aquí..."
    ></input>
  );
}

export function AtributeInput({ children }) {
  return (
    <div className={css["atribute"]}>
      <div className={css["marca"]}>
        <SemiBold>Marca</SemiBold>
      </div>
      <div className={css["atributodiv"]}>
        <p style={{ textTransform: "uppercase", margin: "0" }}>{children}</p>
      </div>
    </div>
  );
}
