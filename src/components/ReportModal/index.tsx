import React, { useState } from "react";
import css from "./reportModal.css";
import { Title, Caption, ParrafoBold, ErrorTextBold } from "ui/fonts/Fonts";
import { sendPetReportInfo, sendPetReportInfoTest } from "lib/api";

export const ReportModal = (props) => {
  const [buttonText, setButtonText] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let reportData = {
      petId: props.petId,
      name: e.target.name.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const reportResponse = await sendPetReportInfoTest(reportData);

    console.log(reportResponse);
    if (reportResponse.message) {
      e.target.reset();
      setButtonText(<ParrafoBold>{reportResponse.message}</ParrafoBold>);
      setTimeout(() => props.onClose(e), 1500);
    }

    if (reportResponse.error) {
      setButtonText(<ErrorTextBold>{reportResponse.error}</ErrorTextBold>);
      setTimeout(() => setButtonText(null), 2500);
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    props.onClose(e);
  };

  return (
    <div className={css["report-modal"]}>
      <div className={css["modal-content"]}>
        <button
          onClick={handleToggle}
          className={css["report-modal__closebutton"]}
        >
          <img
            src="https://lost-pets-app.herokuapp.com/x-mark-white.42bb5c39.png"
            className={css["modal-content__img"]}
          ></img>
        </button>
        <form onSubmit={handleSubmit} className={css["form-conteiner"]}>
          <Title>Reportar info de {props.name}</Title>
          <label className={css["form-conteiner__label"]}>
            <Caption>Tu nombre</Caption>
            <input
              className={css["form-conteiner__input"]}
              type="text"
              name="name"
            />
          </label>
          <label className={css["form-conteiner__label"]}>
            <Caption>Tu telefono</Caption>
            <input
              className={css["form-conteiner__input"]}
              type="tel"
              name="phone"
            />
          </label>
          <label className={css["form-conteiner__label"]}>
            <Caption>¿Donde lo viste?</Caption>
            <textarea
              className={css["form-conteiner__textarea"]}
              name="message"
            ></textarea>
          </label>
          <button className={css["form-conteiner__button"]} type="submit">
            {buttonText ? buttonText : <ParrafoBold>Enviar</ParrafoBold>}
          </button>
        </form>
      </div>
    </div>
  );
};
