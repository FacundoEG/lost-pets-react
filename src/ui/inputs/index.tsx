import React from "react";
import css from "./inputs.css";
import { Caption } from "ui/fonts/Fonts";

interface inputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  register: any;
  props: any;
}

export function LabeledInput({
  type,
  name,
  placeholder,
  value,
  label,
  props,
  register,
}: inputProps) {
  return (
    <label className={css["label"]}>
      <Caption>{label}</Caption>
      <input
        {...register(name)}
        className={css["input"]}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </label>
  );
}
