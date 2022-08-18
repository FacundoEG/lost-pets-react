import React from "react";
import css from "./loader.css";

export function Loader() {
  return (
    <div className={css.bigCircle}>
      <div className={css.smallCircle}></div>
    </div>
  );
}
