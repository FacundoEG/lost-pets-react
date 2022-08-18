import React, { useState } from "react";
import css from "./auth.css";
import { AuthForm } from "components/AuthForm";
import { Loader } from "components/Loader/Loader";

export const Auth = () => {
  return (
    <div className={css["welcome-container"]}>
      <section className={css["main-container"]}>
        <AuthForm></AuthForm>
      </section>
    </div>
  );
};
