import React from 'react'
import DataTable from "react-data-table-component"; 
import { TableWrapper } from './Table.elements';

const Table = ({columns,data}) => {
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
