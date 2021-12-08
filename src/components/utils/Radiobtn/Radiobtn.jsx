import React from "react";
import { RadiobtnWrapper, RadioLabel, Radio } from "./Radiobtn.elements";

export const Radiobtn = ({label,btnId,name}) => {
  

  return (
    <RadiobtnWrapper>
      <Radio type="radio" id={btnId} name={name} />
      <RadioLabel htmlFor={btnId}>{label}</RadioLabel>
    </RadiobtnWrapper>
  );
};
