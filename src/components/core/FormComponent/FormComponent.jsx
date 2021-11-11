import React, { useState } from "react";
import {
  InputBox,
  FormComponentWrapper,
  InputItem,
  InputLabel,
  SelectBox,
} from "./FormComponent.elements";
import { Response } from "../../utils/Response/Response";
import { LinkButton } from "../../utils/button/Btn.elements";

const FormComponent = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [url, setUrl] = useState("https://www.google.com");
  const [header, setHeader] = useState("Content-Type:text/html");
  const [params, setParams] = useState("username=jack");
  const [req, setReq] = useState("GET");

  const handleSubmitClick = () => {
    setUrl(document.getElementById("url").value);
    setHeader(document.getElementById("header").value);
    setParams(document.getElementById("params").value);
    setReq(document.getElementById("req").value);

    //then, I want to send this information to the Response Component.
  };

  const handleChange = (event) => {
    if (event.target.id === "url") {
      setUrl(event.target.value);
    } else if (event.target.id === "header") {
      setHeader(event.target.value);
    } else if (event.target.id === "params") {
      setParams(event.target.value);
    } else if (event.target.id === "req") {
      setReq(event.target.value);
    }
  };

  return (
    <FormComponentWrapper>
      <InputItem>
        <InputLabel>URL</InputLabel>
        <InputBox
          id="url"
          placeholder="URL"
          type="text"
          value={url}
          onChange={handleChange}
        />
      </InputItem>

      <InputItem>
        <InputLabel>Headers</InputLabel>
        <InputBox
          id="header"
          placeholder="Header"
          type="text"
          value={header}
          onChange={handleChange}
        />
      </InputItem>

      <InputItem>
        <InputLabel>Params</InputLabel>
        <InputBox
          id="params"
          placeholder="params"
          type="text"
          value={params}
          onChange={handleChange}
        />
      </InputItem>

      <InputItem>
        <InputLabel>Request Type</InputLabel>
        <SelectBox id="req" value={req} onChange={handleChange}>
          <option hidden>Type</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </SelectBox>
      </InputItem>

      <LinkButton
        onClick={() => {
          handleSubmitClick();
          setBtnClicked(true);
          console.log(setBtnClicked);
        }}
      >
        Submit
      </LinkButton>

      {btnClicked && (
        <Response url={url} params={params} header={header} req={req} />
      )}
    </FormComponentWrapper>
  );
};

export default FormComponent;
