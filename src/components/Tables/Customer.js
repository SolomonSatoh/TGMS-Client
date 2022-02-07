

import React from 'react'
import MaterialTable from 'material-table'

const Customer = () => {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);
  
    const [columns, setColumns] = useState([
      { title: 'Name', field: 'name' },
      { title: 'Phone Number', field: 'phoneNumber' },
      { title: 'Email', field: 'email' },
    
    
    ]);
  
    const [data, setData] = useState([
      { name: 'Martin', phoneNumber: '0885121878', email: 'aaa@gmail.com' },
      { name: 'Fact', phoneNumber: '0885100000', email: 'wwww@gmail.com'},
      { name: 'Chunga', phoneNumber: '0995121878', email: 'qqq@gmail.com'},

    ]);
  
    return (
      <MaterialTable
        title="Customer Details"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}

        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
        })
      }}

      options = {{
          exportButton : true
      }}

      
      />
    )
  }

  export default Customer