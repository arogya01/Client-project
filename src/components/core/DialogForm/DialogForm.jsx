import React from "react";
import {
  DialogFormWrapper,
  DropdownWrapper,
  DialogFormHeader,
  DialogWrapper,
  DialogTextArea,
  DialogFormBtnWrapper,
} from "./DialogForm.elements";
import { InputLabel, InputItem, InputBox } from "../../../global.elements";
import formInfo from "../../../data/newconfig.json";
import { Radiobtn } from "../../utils/Radiobtn/Radiobtn";
import { RadioBtnWrapper } from "../DialogBox/DialogBox.elements";
import Dropdown from "../../utils/dropdown/Dropdown";
import { useContext } from "react";
import { Toggle } from "../../utils/togglebtn/Toggle";
import { Btn } from "../../utils/button/Btn";
import { formContext } from "../../../pages/AddConfig";

const options1 = ["stg", "prd", "test"];
const options2 = ["get", "post"];

const onValueChange = (newValue, setValue) => {
  setValue(newValue);
};

// const writeToTxt = (
//   name,
//   dropdOne,
//   dropdTwo,
//   urlValue,
//   toggleValue,
//   headerValue,
//   bodyValue
// ) => {
//   const element = document.createElement("a");

//   const file = new Blob(
//     [name, dropdOne, dropdTwo, urlValue, toggleValue, headerValue, bodyValue],
//     {
//       type: "text/plain;charset=utf-8",
//     }
//   );

//   element.href = URL.createObjectURL(file);
//   element.download = "myFile.txt";
//   document.body.appendChild(element);
//   element.click();
// };

// const consoleLogging = () => {
//   console.log("hello, is this working?");
// };

const DialogForm = () => {
  const [
    name,
    dropdOne,
    dropdTwo,
    urlValue,
    toggleValue,
    headerValue,
    bodyValue,
    setName,
    setDropdOne,
    setDropdTwo,
    setUrlValue,
    setToggleValue,
    setHeaderValue,
    setBodyValue,
    isTermnialOpen,
    setIsTerminalOpen,
    setHeaderObj,
    isSubmitValue,
    setIsSubmitValue,
  ] = useContext(formContext);

  return (
    <DialogWrapper>
      <DialogFormHeader>
        <h1>New Service Configuration</h1>
      </DialogFormHeader>
      <DialogFormWrapper>
        <InputItem>
          <InputLabel>Name</InputLabel>
          <InputBox
            type="text"
            required
            width="100%"
            value={name}
            onChange={(e) => onValueChange(e.target.value, setName)}
          />
        </InputItem>

        <InputItem>
          <InputLabel>Active</InputLabel>
          <Toggle isToggleValue={toggleValue} setToggleValue={setToggleValue} />
        </InputItem>

        <InputItem>
          <InputLabel>Mode</InputLabel>

          <RadioBtnWrapper justify="flex-start">
            {formInfo.map((element) => {
              return element.btnId === "mode-1" ? (
                <Radiobtn
                  label={element.label}
                  key={element.label}
                  btnId={element.btnId}
                  name={element.name}
                  checked
                  readOnly
                />
              ) : (
                <Radiobtn
                  label={element.label}
                  key={element.label}
                  btnId={element.btnId}
                  name={element.name}
                  readOnly
                />
              );
            })}
          </RadioBtnWrapper>
        </InputItem>
        <DropdownWrapper>
          <Dropdown
            options={options1}
            serviceName="ENV"
            value={dropdOne}
            onValueChange={onValueChange}
            setValue={setDropdOne}
          />
          <Dropdown
            options={options2}
            serviceName="Method"
            value={dropdTwo}
            onValueChange={onValueChange}
            setValue={setDropdTwo}
          />
        </DropdownWrapper>

        <InputItem>
          <InputLabel htmlFor="urlValue">Base URL</InputLabel>
          <InputBox
            type="text"
            id="urlValue"
            required
            width="100%"
            value={urlValue}
            onChange={(e) => onValueChange(e.target.value, setUrlValue)}
          />
        </InputItem>

        <InputItem>
          <InputLabel htmlFor="headerArea">Headers</InputLabel>
          <DialogTextArea
            name="headerArea"
            id="headerArea"
            value={headerValue}
            onChange={(e) => onValueChange(e.target.value, setHeaderValue)}
          />
        </InputItem>

        <InputItem>
          <InputLabel htmlFor="rawData">Raw Data</InputLabel>
          <DialogTextArea
            name="rawData"
            id="rawData"
            value={bodyValue}
            onChange={(e) => {
              onValueChange(e.target.value, setBodyValue);
            }}
          />
        </InputItem>

        <DialogFormBtnWrapper>
          <Btn
            onBtnClick={() => {
              const header = headerValue.split("\n");
              // console.log(header);
              setHeaderObj(header);
              setIsTerminalOpen(!isTermnialOpen);
            }}
            btnName="test"
          />
          <Btn
            btnName="Save"
            onBtnClick={() => {
              if (
                name &&
                dropdOne &&
                dropdTwo &&
                urlValue &&
                toggleValue &&
                headerValue &&
                bodyValue
              ) {}
            }}
          />
          <Btn
            btnName="Cancel"
            onBtnClick={() => {
              setIsSubmitValue(!isSubmitValue);
              setIsTerminalOpen(!isTermnialOpen);
            }}
          />
        </DialogFormBtnWrapper>
      </DialogFormWrapper>
    </DialogWrapper>
  );
};

export default DialogForm;
