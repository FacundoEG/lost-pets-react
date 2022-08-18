import React from "react";
import css from "./error-signal.css";
import { ErrorText } from "ui/fonts/Fonts";

export const ErrorSignal = ({ children }) => {
  return (
    <div className={css["container"]}>
      <img src="./src/assets/error.png" className={css["icon"]} />
      <ErrorText>{children}</ErrorText>
    </div>
  );
};
