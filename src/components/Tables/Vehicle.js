

import React from 'react'
import MaterialTable from 'material-table'

const VehicleDetails = () => {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);
  
    const [columns, setColumns] = useState([
      { title: 'Vehicle Type', field: 'vehicletype' },
      { title: 'Price', field: 'price', initialEditValue: 'initial edit value' },
    ]);
  
    const [data, setData] = useState([
      { vehicletype: 'Bus', price: 'K30,000'},
      { vehicletype: 'Truck', price: 'K25,000'},
      { vehicletype: 'Abnormal', price: 'K20,000'},
      { vehicletype: 'Luxury', price: 'K15,000'},
      
    ]);
  
    return (
      <MaterialTable
        title="Vehicle Details"
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
        exportButton : true,
        actionsColumnIndex: -1
       }}

      
      />
    )
  }

  export default VehicleDetails