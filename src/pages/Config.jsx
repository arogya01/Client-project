import React from "react";
import AppHeader from "../components/core/AppHeader/AppHeader";
import { useState} from "react";
import { ConfigBtn } from "../components/utils/configButton/ConfigBtn";
import Dropdown from "../components/utils/dropdown/Dropdown";
import { FilterWrapper } from "../global.elements";
import configData from "../data/config.json";
import Table from "../components/core/Table/Table";

const onValueChange = (newValue, setValue) => {
  setValue(newValue);
};

const checkUp= (value) =>{
   if(value !== undefined){
     return false;
   }
   return true;
}

const Config = () => {
  const [valueOne, setValueOne] = useState(undefined);
  const [valueTwo, setValueTwo] = useState(undefined);
  const [valueThree, setValueThree] = useState(undefined);
  

  
  return (
    <>
      <AppHeader headerName="Configuration" />
      <FilterWrapper>
        <Dropdown
          serviceName={configData[0].serviceName}
          key={configData[0].serviceName}
          options={configData[0].options}
          value={valueOne}
          setValue={setValueOne}
          onValueChange={onValueChange}
        />
        <Dropdown
          serviceName={configData[1].serviceName}
          key={configData[1].serviceName}
          options={configData[1].options}
          value={valueTwo}
          disabled={checkUp(valueOne)}
          setValue={setValueTwo}
          onChange={onValueChange}
        />
        <Dropdown
          serviceName={configData[2].serviceName}
          key={configData[2].serviceName}
          options={configData[2].options}
          value={valueThree}
          setValue={setValueThree}
          onChange={onValueChange}
          disabled={checkUp(valueTwo)}
        />
      </FilterWrapper>
      <ConfigBtn />
      {valueOne && valueTwo && valueThree && <Table />}
      {/* <DataTable /> */}
    </>
  );
};

export default Config;
