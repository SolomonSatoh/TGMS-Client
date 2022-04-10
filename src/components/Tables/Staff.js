/* Importing the MaterialTable component from the material-table package. */
import React from 'react'
import MaterialTable from 'material-table'

const Staff = () => {
    /* A destructuring assignment. It is a JavaScript expression that makes it possible to unpack
    values from arrays, or properties from objects, into distinct variables. */
    const { useState } = React;

    /* A state hook that is used to set the selected row to null. */
    const [selectedRow, setSelectedRow] = useState(null);

    /* Setting the columns of the table. */
    const [columns, setColumns] = useState([
      { title: 'Toll Name', field: 'tollName', initialEditValue: 'initial edit value' },
      { title: 'Name', field: 'name' },
      {title: 'Email', field: 'email'},
      { title: 'Role', field: 'role' },
    
    ]);
  
    const [data, setData] = useState([
      { tollName: 'Jenda', name: 'Martin', email:'wtywywywy@gmial.com', role: 'Admin' },
      { tollName: 'Nkhamenya', name: 'Fact', email:'wtywywywy@gmial.com', role: 'Staff' },
      { tollName: 'Kameza', name: 'Chunga', email:'wtywywywy@gmial.com', role: 'Admin' },

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
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
            exportButton : true,
            searchFieldAlignment : "right",
            actionsColumnIndex: -1
        })
      }}
      
      />
    )
  }

  export default Staff