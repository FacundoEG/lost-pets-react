import React from "react";
import css from "./petCard.css";
import { Subtitle, ParrafoBold, Caption, LinkText } from "ui/fonts/Fonts";

export function LostPet(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(props);
  };

  return (
    <div className={css["card-container"]}>
      <img src={props.photo} className={css["card-image"]}></img>
      <div className={css["card-title"]}>
        <Subtitle>{props.name}</Subtitle>
      </div>
      <label className={css["card-label"]}>
        <img
          src="https://lost-pets-app.herokuapp.com/marker2.6d3bafa8.png"
          className={css["marker"]}
        ></img>
        <ParrafoBold>Ubicacion: </ParrafoBold>
        <Caption>{props.ubication}</Caption>
      </label>
      <div onClick={handleSubmit} className={css["card-link"]}>
        <LinkText>Reportar Información</LinkText>
      </div>
    </div>
  );
}
