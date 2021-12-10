import React from "react";
import { DialogFormWrapper, DropdownWrapper , DialogFormHeader , DialogWrapper } from "./DialogForm.elements";
import { InputLabel, InputItem, InputBox } from "../../../global.elements";
import formInfo from "../../../data/newconfig.json";
import { Radiobtn } from "../../utils/Radiobtn/Radiobtn";
import {RadioBtnWrapper} from '../DialogBox/DialogBox.elements'
import Dropdown from "../../utils/dropdown/Dropdown";
import { useState } from "react";
import { Toggle } from "../../utils/togglebtn/Toggle";

const options1=['stg','prd','test'];
const options2=[ 'get' , 'post' ];

const DialogForm = () => {
   
  const [name,setName] = useState('test')
  const [radiovalue,setRadioValue] = useState('rest');

  return (
    <DialogWrapper>
    <DialogFormHeader>
      <h1>New Service Configuration</h1>
    </DialogFormHeader>
    <DialogFormWrapper>
      <InputItem>
        <InputLabel>Name</InputLabel>
        <InputBox type="text" required width="100%"/>
      </InputItem>

      <InputItem>
      <InputLabel>Active</InputLabel>
      <Toggle />
      </InputItem>

    <InputItem>
    <InputLabel>Mode</InputLabel>
    
      <RadioBtnWrapper justify="flex-start">
        {formInfo.map((element) => {
          return (
            (element.btnId === "mode-1" )?(
              <Radiobtn
              label={element.label}
              key={element.label}
              btnId={element.btnId}
              name={element.name}
              checked
            />
            ):
            (
              <Radiobtn
              label={element.label}
              key={element.label}
              btnId={element.btnId}
              name={element.name}
              
            />
            )
            
          );
        })}
      </RadioBtnWrapper>
    </InputItem>
         <DropdownWrapper>
        <Dropdown options={options1} serviceName="ENV" value={options1[0]} />
        <Dropdown options={options2} serviceName="Method" value={options2[0]} />
        </DropdownWrapper>

        <InputItem>
        <InputLabel>Base URL</InputLabel>
        <InputBox type="text" required width="100%" />
      </InputItem>
      <InputItem>
        <InputLabel>Headers</InputLabel>
        <InputBox type="text" required width="100%" />
      </InputItem>
        
      
    </DialogFormWrapper>
    </DialogWrapper>
  );
};

export default DialogForm;
