


import React from 'react'
import MaterialTable from 'material-table'

const Staff = () => {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);
  
    const [columns, setColumns] = useState([
      { title: 'Name', field: 'name' },
      { title: 'Toll Name', field: 'tollName', initialEditValue: 'initial edit value' },
      { title: 'Role', field: 'role' },
    
    ]);
  
    const [data, setData] = useState([
      { name: 'Martin', tollName: 'Jenda', role: 'Admin' },
      { name: 'Fact', tollName: 'Nkhamenya', role: 'Staff' },
      { name: 'Chunga', tollName: 'Kameza', role: 'Admin' },

    ]);
  
    return (
      <MaterialTable
        title="Staff Details"
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

  export default Staff