import React from "react";
import css from "./auth.css";
import { AuthForm } from "components/AuthForm";

export const Auth = () => {
  return (
    <div className={css["welcome-container"]}>
      <section className={css["main-container"]}>
        <AuthForm></AuthForm>
      </section>
    </div>
  );
};
