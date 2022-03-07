import React from "react";
import { Radiobtn } from "../../utils/Radiobtn/Radiobtn";
import {
  DialogWrapper,
  DialogHeader,
  RadioBtnWrapper,
  BtnWrapper,
} from "./DialogBox.elements";
import dialogArr from "../../../data/dialog.json";
import { LinkButton } from "../../utils/button/Btn.elements";


const DialogBox = ({ isSumbitValue, setIsSumbitValue }) => {

  const changeSubmitValue = () => {
    console.log("it works");
    setIsSumbitValue(!isSumbitValue);
  };

  return (
    <DialogWrapper>
      <DialogHeader>Add Service Configuration</DialogHeader>
      <RadioBtnWrapper justify='center'>
        {dialogArr.map((element) => {
          return element.btnId === "radio-1" ? (
            <Radiobtn
              label={element.label}
              key={element.label}
              btnId={element.btnId}
              name={element.name}
              checked
            />
          ) : (
            <Radiobtn
              label={element.label}
              key={element.label}
              btnId={element.btnId}
              name={element.name}
            />
          );
        })}
      </RadioBtnWrapper>
      <BtnWrapper>
        <LinkButton onClick={changeSubmitValue}>Next</LinkButton>
        <LinkButton>Cancel</LinkButton>
      </BtnWrapper>
    </DialogWrapper>
  );
};

export default DialogBox;
