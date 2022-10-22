import React from "react";
import css from "./reportedPetCard.css";
import { Subtitle, ParrafoBold, Caption } from "ui/fonts/Fonts";

export function ReportedPetCard(props) {
  let foundVariantColor = "#16c311";
  let lostVariantColor = "#fb2424";

  return (
    <div className={css["card-container"]}>
      <img src={props.photo} className={css["card-image"]}></img>
      <Subtitle>{props.name}</Subtitle>
      <label className={css["card-label"]}>
        <img
          src={"https://lost-pets-app.herokuapp.com/marker2.6d3bafa8.png"}
          className={css["marker"]}
        ></img>
        <ParrafoBold>UBICACIÓN:</ParrafoBold>
        <Caption>{props.ubication}</Caption>
      </label>
      <label className={css["card-label"]}>
        <img
          src={"https://lost-pets-app.herokuapp.com/pet-paw.79409924.png"}
          className={css["marker"]}
        ></img>
        <ParrafoBold>ESTADO:</ParrafoBold>
        <Caption
          variant={
            props.state == "perdido" ? lostVariantColor : foundVariantColor
          }
        >
          {props.state}
        </Caption>
      </label>
      <a className={css["pencil-link"]}>
        <img
          className={css["pencil"]}
          src={"https://lost-pets-app.herokuapp.com/pencil.d913d618.png"}
        ></img>
      </a>
    </div>
  );
}
