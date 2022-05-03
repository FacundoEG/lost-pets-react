import React from "react";
import css from "./buttons.css";
import { ParrafoBold } from "ui/fonts/Fonts";

export function MainButton({ children, onClick }) {
  const handleClick = (e) => {
    onClick(e);
  };
  return (
    <button onClick={handleClick} className={css["main-button"]}>
      <ParrafoBold>{children}</ParrafoBold>
    </button>
  );
}

export function MlButton({ children }) {
  return (
    <a className={css["ml-anchor"]} href={children}>
      <button className={css["ml-button"]}>Ver Producto</button>
    </a>
  );
}
