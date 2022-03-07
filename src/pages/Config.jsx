import React from "react";
import AppHeader from "../components/core/AppHeader/AppHeader";
import { useState,useEffect} from "react";
import { ConfigBtn } from "../components/utils/configButton/ConfigBtn";
import Dropdown from "../components/utils/dropdown/Dropdown";
import { FilterWrapper } from "../global.elements";
import configData from "../data/config.json";
// import data from '../data/dataTable.json';
import Table from "../components/core/Table/Table";
// import { Toggle } from "../components/utils/togglebtn/Toggle";
import { SmToggleBtn } from "../components/utils/smToggleBtn/SmToggleBtn";

const onValueChange = (newValue, setValue) => {
  setValue(newValue);
};
 
// const data =[
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
//   {
//      name:"SDG_API_1",		
//      creationDate:"09/29/2019 9:42 am",		
//       type:"Rest" ,
//       options:"...",
//       active:'true',
//       env:"test"
         
//   },
  
//   ]


  

const columns=[
  {
    id:1,
    name:"Name",
    selector:(row)=>row.name,
    sortable:true,
    reorder:true
  },
  {
    id:2,
    name:"Creation Date",
    selector:(row)=>row.creationDate,
    sortable:true,
    reorder:true
  },
  {
    id:3,
    name:"Type",
    selector:(row)=>row.type,
    sortable:true,
    reorder:true
  },
  {
    id:4,
    name:"Active",
    selector:(row) => row.active,
    button:true,
    cell:(row,column,id)=><SmToggleBtn isToggleValue={row.active} />,

  },
  {
    id:5,
    name:"Env",
    selector:(row)=>row.env,
  },
  {
    id:6,
    name:"options",
    selector:(row)=>row.options
  }
]


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
  const [data,setData] = useState([]);

  useEffect(() => {
    if(valueOne && valueTwo && valueThree){
      fetch('dataTable.json').then(async (resp)=>{
        const newData=await resp.json();
      
        console.log(newData);
        setData(newData);
      
    })
  }
  
    // return () => {
      
    // }
  }, [valueOne,valueTwo,valueThree]);
  
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
          onValueChange={onValueChange}
        />
        <Dropdown
          serviceName={configData[2].serviceName}
          key={configData[2].serviceName}
          options={configData[2].options}
          value={valueThree}
          setValue={setValueThree}
          onValueChange={onValueChange}
          disabled={checkUp(valueTwo)}
        />
      </FilterWrapper>
      <ConfigBtn />
    {
      (valueOne && valueTwo && valueThree) ?
      <Table columns={columns} data={data} /> 
      :
       <Table columns={columns} data={''} />
}
    </>
  );
};

export default Config;
