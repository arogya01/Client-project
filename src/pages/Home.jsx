import React from 'react'
import AppHeader from '../components/core/AppHeader/AppHeader';
import {Tabular} from '../components/core/TabularSheet/Tabular';
import { TabularWrapper } from '../components/core/TabularSheet/Tabular.Elements';
import tabularData from '../data/tabular.json';
import {Btn} from '../components/utils/button/Btn';
import { Checker } from '../components/utils/Checker/Checker';

const columns = [
    {
        id:1,
        name:"S.No",
        selector:(row)=>row.serial,
        sortable:true,
        reorder:true,
       
      },
    {
        id:2,
        name:"Job Id",
        selector:(row)=>row.job_id,
        sortable:true,
        reorder:true,
        cell:(row)=><button onClick={()=>{ 
          console.log(`${row.serial} fetched`);
        }}>{row.serial}</button>
      },
    {
        id:3,
        name:"status",
        selector:(row)=>row.status,
        sortable:true,
        reorder:true
      },
    {
        id:4,
        name:"enable",
        selector:(row)=>row.enable,
        sortable:true,
        reorder:true,
        cell:()=><Checker onChange={(e)=> {
          console.log(e);
          e.target.checked=true;
        }}/>
      },
    {
        id:5,
        name:"disable",
        selector:(row)=>row.disable,
        sortable:true,
        reorder:true,
        cell:()=><Checker/>
      },
    {
        id:6,
        name:"action",
        selector:(row)=>row.action,
        sortable:true,
        reorder:true,
        center:true,
        cell:()=><Btn btnName="submit" onBtnClick={
           (event)=>{
             console.log('Btn Clicked!!');
             event.target.innerHTML = "submitted";
           }
        }/>
      },
]


//  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            fontSize:'20px'
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};


const Home = () => {
  console.log(Tabular);
 
  return (
    <>
   <AppHeader headerName="Home"/>
   <TabularWrapper>

   <Tabular columns={columns}  data={tabularData} customStyles={customStyles}
   selectableRows/>   
   </TabularWrapper>
   </>
  )
}


export default Home;
