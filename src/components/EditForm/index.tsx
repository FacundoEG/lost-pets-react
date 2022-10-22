import React, { useState } from "react";
import css from "./editForm.css";
import { LabeledInput } from "ui/inputs";
import { FormButton } from "ui/buttons/Buttons";
import { Caption, ParrafoBold, Subtitle } from "ui/fonts/Fonts";
import { useForm } from "react-hook-form";
import { ErrorSignal } from "components/ErrorSignal";
import { Loader } from "components/Loader/Loader";
import { useRecoilState } from "recoil";
import { userData } from "atoms";
import { getUserData } from "lib/api";
import { updateUserData } from "lib/api";
import * as crypto from "crypto-browserify";

export const EditForm = (props) => {
  const { register, handleSubmit } = useForm();
  const [errorData, setErrorData] = useState(undefined);
  const [message, setMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [userLocalData, setLocalUserData] = useRecoilState(userData);

  function getHashFromString(text: string) {
    return crypto.createHash("sha256").update(text).digest("hex");
  }

  function resetData() {
    setMessage(undefined);
    setIsLoading(undefined);
    setErrorData(undefined);
  }

  async function updateUser(userData) {
    setIsLoading(true);
    const hashedPass = getHashFromString(userData.password);
    const userDataFetched = await getUserData(userLocalData.token);
    const userHashedPass = userDataFetched.authData["password"];

    resetData();

    if (hashedPass === userHashedPass) {
      setErrorData("Debes poner una contraseña diferente a la actual");
    }

    if (hashedPass !== userHashedPass) {
      const updateUserPromise = await updateUserData(
        userData,
        userLocalData.token
      );

      if (updateUserPromise.message) {
        setMessage(updateUserPromise.message);
        setLocalUserData({ ...userLocalData, name: userData.name });
      }

      if (updateUserPromise.error) {
        setErrorData(updateUserPromise.error);
      }
    }
  }

  const editSubmit = (data) => {
    resetData();
    const { name, password, repeatedPassword } = data;

    if (password !== repeatedPassword) {
      setErrorData("Las contraseñas no coinciden");
    }

    if (name && password && repeatedPassword) {
      updateUser(data);
    } else {
      setErrorData("Debes modificar algun campo para guardar los datos");
    }
  };

  if (!userLocalData) return <></>;

  return (
    <>
      <form
        className={css["form-container"]}
        onSubmit={handleSubmit(editSubmit)}
      >
        <LabeledInput
          register={register}
          name="name"
          type="text"
          label="Nombre"
          defaultValue={userLocalData.name}
          {...{ props }}
        ></LabeledInput>

        <Subtitle>Cambiar contraseña</Subtitle>

        <LabeledInput
          register={register}
          type="password"
          name="password"
          label="Contraseña"
          {...props}
        ></LabeledInput>

        <LabeledInput
          register={register}
          type="password"
          name="repeatedPassword"
          label="Repetir contraseña"
          {...props}
        ></LabeledInput>

        <FormButton type="submit">
          <ParrafoBold>Guardar</ParrafoBold>
        </FormButton>
      </form>
      {errorData && <ErrorSignal>{errorData}</ErrorSignal>}
      {message && <Caption>{message}</Caption>}
      {isLoading && <Loader />}
    </>
  );
};
