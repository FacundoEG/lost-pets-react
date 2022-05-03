import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "pages/home";
import { Loader } from "components/loader/Loader";
import css from "/pages/home/home.css";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./router";

ReactDOM.render(
  <Suspense
    fallback={
      <div className={css["wait-container"]}>
        <Loader></Loader>
      </div>
    }
  >
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>,
  document.querySelector(".app")
);
