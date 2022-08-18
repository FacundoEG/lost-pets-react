import React from "react";
import css from "./buttons.css";
import { ParrafoBold } from "ui/fonts/Fonts";

export function MainButton({ children, onClick }) {
  const handleClick = (e) => {
    onClick(e);
  };
  return (
    <button onClick={handleClick} className={css["form-button"]}>
      <ParrafoBold>{children}</ParrafoBold>
    </button>
  );
}

export function FormButton({ children, type }) {
  return (
    <button type={type} className={css["form-button"]}>
      {children}
    </button>
  );
}
