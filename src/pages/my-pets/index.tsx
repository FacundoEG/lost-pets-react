import React, { useState, useEffect } from "react";
import css from "./myPets.css";
import { HomeTitle } from "ui/fonts/Fonts";
import { getReportedPetsByUser } from "lib/api";
import { Loader } from "components/Loader/Loader";
import { ReportedPetCard } from "components/ReportedPetCard";
import { useLocalUserData } from "hooks";

export const MyPets = () => {
  const [petsData, setPetData] = useState(undefined);
  const userData = useLocalUserData();

  async function updatePetsData() {
    const petsDataPromise = await getReportedPetsByUser(userData.token);
    setPetData(petsDataPromise.reportedPets);
  }

  useEffect(() => {
    updatePetsData();
  }, []);

  return (
    <div className={css["welcome-container"]}>
      <section className="main-conteiner"> </section>
      <HomeTitle>Mis Mascotas Reportadas</HomeTitle>
      <div className={css["pets-container"]}>
        {!petsData && <Loader />}
        {petsData &&
          petsData.map((pet) => (
            <ReportedPetCard
              key={pet.id}
              name={pet.name}
              petId={pet.id}
              ubication={pet.ubication}
              photo={pet.photoUrl}
              petLng={pet.lng}
              petLat={pet.lat}
              state={pet.state}
            ></ReportedPetCard>
          ))}
      </div>
    </div>
  );
};
