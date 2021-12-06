import React from 'react'
import DataTable from "react-data-table-component"; 
import data from '../../../data/dataTable.json';
import { TableWrapper } from './Table.elements';

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
    selector:(row)=>row.active,

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

const Table = () => {
  return (
    <TableWrapper>
      <DataTable 
      title="SVC-1"
      columns={columns}
      data={data}
      pagination
      />
    </TableWrapper>
  )
}

export default Table
