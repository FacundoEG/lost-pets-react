import React from "react";
import css from "./error-signal.css";
import { ErrorText } from "ui/fonts/Fonts";

export const ErrorSignal = ({ children }) => {
  return (
    <div className={css["container"]}>
      <img
        src="https://lost-pets-app.herokuapp.com/error.bfc52426.png"
        className={css["icon"]}
      />
      <ErrorText>{children}</ErrorText>
    </div>
  );
};
