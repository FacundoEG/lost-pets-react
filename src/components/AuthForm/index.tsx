import React, { useState, useEffect } from "react";
import css from "./authForm.css";
import { LabeledInput } from "ui/inputs";
import { FormButton } from "ui/buttons/Buttons";
import { Caption, HomeTitle, ParrafoBold } from "ui/fonts/Fonts";
import { useForm } from "react-hook-form";
import { ErrorSignal } from "components/ErrorSignal";
import { emailCheck, getAuthToken, getUserData } from "lib/api";
import { userData, pageToGo } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export const AuthForm = (props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const previousPath = useRecoilValue(pageToGo);
  const setUserLocalData = useSetRecoilState(userData);
  const [errorData, setErrorData] = useState(undefined);
  const [loginData, setLoginData] = useState(undefined);
  const [emailRegistered, setEmailRegistered] = useState(undefined);

  async function makeEmailcheck(emailData) {
    const checkResponse = await emailCheck({ email: emailData });
    if (checkResponse.true) {
      setEmailRegistered(true);
    } else {
      setEmailRegistered(false);
    }
  }

  async function authUser(loginData) {
    const authToken = await getAuthToken(loginData);

    if (authToken.error) {
      setErrorData(authToken.error);
    }

    if (authToken.token) {
      const fetchUserData = await getUserData(authToken.token);
      setUserLocalData({
        ...fetchUserData["userData"],
        token: authToken.token,
      });

      if (previousPath !== "/auth") {
        navigate(previousPath, { replace: true }), [navigate];
      } else {
        navigate("/", { replace: true }), [navigate];
      }
    }
  }

  useEffect(() => {
    if (loginData) {
      const { email } = loginData;
      if (email) {
        makeEmailcheck(email);
      }
    }
  }, [loginData]);

  const loginSubmit = (data) => {
    const { email, password } = data;

    if (email) {
      setLoginData(data);
      setErrorData(undefined);
    } else {
      setErrorData("Debes completar el email para poder continuar");
    }

    if (emailRegistered && !password) {
      setErrorData("Debes completar la contraseña para poder verificarte");
    }

    if (emailRegistered && password) {
      authUser(data);
    }
  };

  const signUpSubmit = (data) => {
    setErrorData(undefined);
    const { name, email, password, repeatedPassword } = data;

    if (name && email && password && repeatedPassword) {
      if (password !== repeatedPassword) {
        setErrorData("Las contraseñas no coinciden");
        console.log("se continua el login");
      }
    } else {
      setErrorData("Faltan datos para completar el registro");
    }
  };

  if (emailRegistered == false)
    return (
      <>
        <HomeTitle>Registrate</HomeTitle>
        <Caption>Recordá completar todos los campos del formulario</Caption>
        <form
          className={css["form-container"]}
          onSubmit={handleSubmit(signUpSubmit)}
        >
          <LabeledInput
            register={register}
            type="email"
            name="email"
            label="Email"
            {...props}
          ></LabeledInput>

          <LabeledInput
            register={register}
            name="name"
            type="text"
            label="Nombre"
            {...props}
          ></LabeledInput>

          <br />
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
            <ParrafoBold>Crear cuenta</ParrafoBold>
          </FormButton>
        </form>
        {errorData && <ErrorSignal>{errorData} </ErrorSignal>}
      </>
    );

  if (emailRegistered == undefined || true)
    return (
      <>
        <HomeTitle>Ingresar</HomeTitle>
        <Caption>Recordá completar todos los campos del formulario</Caption>
        <form
          className={css["form-container"]}
          onSubmit={handleSubmit(loginSubmit)}
        >
          {!emailRegistered && (
            <LabeledInput
              register={register}
              type="email"
              name="email"
              label="Email"
              {...props}
            ></LabeledInput>
          )}
          {emailRegistered && (
            <LabeledInput
              register={register}
              type="password"
              name="password"
              label="Contraseña"
              {...props}
            ></LabeledInput>
          )}
          <FormButton type="submit">
            <ParrafoBold>Enviar</ParrafoBold>
          </FormButton>
        </form>
        {errorData && <ErrorSignal>{errorData} </ErrorSignal>}
      </>
    );
};
