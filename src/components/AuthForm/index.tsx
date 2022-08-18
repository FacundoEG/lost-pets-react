import React, { useState, useEffect } from "react";
import css from "./authForm.css";
import { LabeledInput } from "ui/inputs";
import { FormButton } from "ui/buttons/Buttons";
import { Caption, HomeTitle, ParrafoBold } from "ui/fonts/Fonts";
import { useForm } from "react-hook-form";
import { ErrorSignal } from "components/ErrorSignal";
import { createUser, emailCheck, getAuthToken, getUserData } from "lib/api";
import { userData, pageToGo } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

export const AuthForm = (props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const previousPath = useRecoilValue(pageToGo);
  const setUserLocalData = useSetRecoilState(userData);
  const [errorData, setErrorData] = useState(undefined);
  const [message, setMessage] = useState(undefined);
  const [loginData, setLoginData] = useState(undefined);
  const [isRegistered, setIsRegistered] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loginData) {
      const { email } = loginData;
      if (email) {
        makeEmailcheck(email);
      }
    }
  }, [loginData]);

  async function makeEmailcheck(emailData) {
    setIsLoading(true);
    const checkResponse = await emailCheck({ email: emailData });
    checkResponse.true ? setIsRegistered(true) : setIsRegistered(false);
    setIsLoading(false);
  }

  async function authUser(loginData) {
    setIsLoading(true);
    const authToken = await getAuthToken(loginData);

    setIsLoading(false);
    if (authToken.error) {
      setErrorData(authToken.error);
    }

    if (authToken.token) {
      const fetchUserData = await getUserData(authToken.token);
      setUserLocalData({
        ...fetchUserData["userData"],
        token: authToken.token,
      });

      if (previousPath) navigate(previousPath, { replace: true }), [navigate];

      if (previousPath == "/auth") navigate("/", { replace: true }), [navigate];
    }
  }

  const loginSubmit = (data) => {
    const { email, password } = data;

    if (email) {
      setLoginData(data);
      setErrorData(undefined);
    } else {
      setErrorData("Debes completar el email para poder continuar");
    }

    if (isRegistered && !password) {
      setErrorData("Debes completar la contraseña para poder verificarte");
    }

    if (isRegistered && password) authUser(data);
  };

  const signUpSubmit = (data) => {
    setErrorData(undefined);
    const { name, email, password, repeatedPassword } = data;

    if (name && email && password && repeatedPassword) {
      if (password !== repeatedPassword) {
        setErrorData("Las contraseñas no coinciden");
      } else {
        const newUserData = { name, email, password };
        submitUser(newUserData);
      }
    } else {
      setErrorData("Faltan datos para completar el registro");
    }
  };

  async function submitUser(formData) {
    setIsLoading(true);

    const createUserResponse = await createUser(formData);
    setIsLoading(false);

    if (createUserResponse.message) {
      const { email, password } = formData;
      setMessage(createUserResponse.message);

      const authData = { email, password };
      authUser(authData);
      setIsLoading(false);
    }
  }

  if (isRegistered == false)
    return (
      <>
        <HomeTitle>Registrate</HomeTitle>
        <Caption>Recordá completar todos los campos del formulario</Caption>
        <form
          className={css["form-container"]}
          onSubmit={handleSubmit(signUpSubmit)}
        >
          <div style={{ display: "none" }}>
            <LabeledInput
              register={register}
              type="email"
              name="email"
              label="Email"
              {...props}
            ></LabeledInput>
          </div>

          <LabeledInput
            register={register}
            name="name"
            type="text"
            label="Nombre"
            {...{ props }}
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
        {errorData && <ErrorSignal>{errorData}</ErrorSignal>}
        {message && <Caption>{message}</Caption>}
        {isLoading ? <Loader /> : null}
      </>
    );

  if (isRegistered == undefined || true)
    return (
      <>
        <HomeTitle>Ingresar</HomeTitle>
        <Caption>Recordá completar todos los campos del formulario</Caption>
        <form
          className={css["form-container"]}
          onSubmit={handleSubmit(loginSubmit)}
        >
          {!isRegistered && (
            <LabeledInput
              register={register}
              type="email"
              name="email"
              label="Email"
              {...props}
            ></LabeledInput>
          )}
          {isRegistered && (
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
        {isLoading ? <Loader /> : null}
      </>
    );
};
