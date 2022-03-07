import React from 'react'
import DataTable from "react-data-table-component";

export const Tabular = ({columns,data}) => {
  return (
    <DataTable 
      columns={columns}
      data={data}
      pagination
      />
  )
}
