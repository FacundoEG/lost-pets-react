import React from "react";
import css from "./home.css";
import { Title, Caption } from "ui/fonts/Fonts";
import { HomeButton } from "components/HomeButton";
import { usePetsNearby } from "../../hooks";
import { LostPet } from "components/PetCard";
import { ReportModal } from "components/ReportModal";

export const Home = () => {
  const [modalState, SetModalState] = React.useState(false);
  const [modalData, SetModalData] = React.useState({});
  const petsNearby = usePetsNearby();

  const handleModal = (e) => {
    SetModalData({ name: e.name, petId: e.petId });
    SetModalState(true);
  };

  const handleModalClose = (e) => {
    SetModalState(false);
  };

  return (
    <div className={css["welcome-container"]}>
      {
        <section className={css["modal-contaner"]}>
          {modalState ? (
            <ReportModal
              onClose={handleModalClose}
              name={modalData["name"]}
              petId={modalData["petId"]}
            ></ReportModal>
          ) : null}
        </section>
      }
      <section className={css["main-conteiner"]}>
        <Title>Mascotas perdidas cerca tuyo</Title>
        <Caption>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </Caption>
        <HomeButton>Dar mi ubicación</HomeButton>
      </section>
      <div className={css["data-container"]}>
        {petsNearby
          ? petsNearby.map((pet) => (
              <LostPet
                onSearch={handleModal}
                key={pet.id}
                name={pet.name}
                petId={pet.id}
                ubication={pet.ubication}
                photo={pet.photoUrl}
              ></LostPet>
            ))
          : ""}
      </div>
    </div>
  );
};
