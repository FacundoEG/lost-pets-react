import React from "react";
import css from "./home.css";
import { Title, Caption } from "ui/fonts/Fonts";
import { HomeButton } from "components/HomeButton";
import { usePetsNearby } from "../../hooks";
import { LostPet } from "components/PetCard";

const handleContainerData = (response) => {
  if (!response) {
    return null;
  } else if (response.length === 0) {
    return (
      <Caption>No encontramos mascotas perdidas cerca de tu ubicación.</Caption>
    );
  } else if (response.length > 0) {
    return response.map((pet) => (
      <LostPet
        onClick={() => {
          console.log("e");
        }}
        key={pet.id}
        name={pet.name}
        petId={pet.id}
        ubication={pet.ubication}
        photo={pet.photoUrl}
      ></LostPet>
    ));
  }
};

export const Home = () => {
  const petsNearby = usePetsNearby();
  console.log(petsNearby, "petsNearby hook result");

  return (
    <div className={css["welcome-container"]}>
      <section className={css["main-conteiner"]}>
        <Title>Mascotas perdidas cerca tuyo</Title>
        <Caption>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </Caption>
        <HomeButton>Dar mi ubicación</HomeButton>
      </section>
      <div className={css["data-container"]}>
        {handleContainerData(petsNearby)}
      </div>
    </div>
  );
};
