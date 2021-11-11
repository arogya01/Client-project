import React from "react";
import { Btn } from "../../utils/button/Btn";
import {
  InputBox,
  FormComponentWrapper,
  InputItem,
  InputLabel,
  SelectBox,
} from "./FormComponent.elements";
import { Response } from "../../utils/Response/Response";

const FormComponent = () => {
  return (
    <FormComponentWrapper>
      <InputItem>
        <InputLabel>URL</InputLabel>
        <InputBox placeholder="URL" type="text" value='https://www.google.com' />
      </InputItem>

      <InputItem>
        <InputLabel>Headers</InputLabel>
        <InputBox placeholder="Header" type="text" value='Content-Type:text/html' />
      </InputItem>

      <InputItem>
        <InputLabel>Params</InputLabel>
        <InputBox placeholder="params" type="text" value='username=jack' />
      </InputItem>

      <InputItem>
        <InputLabel>Request Type</InputLabel>
        <SelectBox>
          <option value="GET" hidden>
            Type
          </option>
          <option value="1">GET</option>
          <option value="2">POST</option>
        </SelectBox>
      </InputItem>

      <Btn btnName="Submit" />

     <Response />
    </FormComponentWrapper>
  );
};

export default FormComponent;
