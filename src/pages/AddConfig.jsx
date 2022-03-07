import React from "react";
import DialogBox from "../components/core/DialogBox/DialogBox";
import DialogForm from "../components/core/DialogForm/DialogForm";
import { Terminal } from "../components/utils/Terminal/Terminal";
import { useState,createContext } from "react";
import { TerminalWrapper } from "../components/utils/Terminal/Terminal.elements";

export const formContext=createContext();
const options1 = ["stg", "prd", "test"];
const options2 = ["get", "post"];



const AddConfig = () => {
  const [name, setName] = useState("test");
  // const [radiovalue, setRadioValue] = useState("rest");
  const [dropdOne, setDropdOne] = useState(options1[0]);
  const [dropdTwo, setDropdTwo] = useState(options2[0]);
  const [toggleValue, setToggleValue] = useState(true);
  const [urlValue, setUrlValue] = useState(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const [headerValue, setHeaderValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [isSumbitValue, setIsSumbitValue] = useState(false);
  const [isTermnialOpen, setIsTerminalOpen] = useState(false);
  const [headerObj,setHeaderObj] = useState([]);
  

  return (
    <formContext.Provider value={[
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
      isSumbitValue,
      setIsSumbitValue
    ]
      }>
      <DialogBox
        isSumbitValue={isSumbitValue}
        setIsSumbitValue={setIsSumbitValue}
      />
      {isSumbitValue && (
        <DialogForm
        />
      )}
      <TerminalWrapper>
      {isTermnialOpen && <Terminal  url={urlValue} header={headerObj} rawData={bodyValue} req={dropdTwo}/>}
      </TerminalWrapper>
    </formContext.Provider>
  );
};

export default AddConfig;
