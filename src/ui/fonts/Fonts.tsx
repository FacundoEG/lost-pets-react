import React from "react";
import css from "./fonts.css";

export function HomeTitle({ children }) {
  return <h1 className={css["home-title"]}>{children}</h1>;
}

export function Title({ children }) {
  return <h2 className={css["title"]}>{children}</h2>;
}

export function Subtitle({ children }) {
  return <h3 className={css["subtitle"]}>{children}</h3>;
}

export function Parrafo({ children }) {
  return <p className={css["parrafo"]}>{children}</p>;
}

export function ParrafoBold({ children }) {
  return <p className={css["parrafo-bold"]}>{children}</p>;
}

export function LinkText({ children }) {
  return <p className={css["link-text"]}>{children}</p>;
}

export function Caption({ children }) {
  return <p className={css["caption"]}>{children}</p>;
}

export function ErrorText({ children }) {
  return <span className={css["error-text"]}>{children}</span>;
}

export function ErrorTextBold({ children }) {
  return <p className={css["error-text-bold"]}>{children}</p>;
}
