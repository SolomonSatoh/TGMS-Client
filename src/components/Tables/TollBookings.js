

import React from 'react'
import MaterialTable from 'material-table'

const TollBookings = () => {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);
  
    const [columns, setColumns] = useState([
      { title: 'District', field: 'district' },
      { title: 'Toll Name', field: 'tollname', initialEditValue: 'initial edit value' },
      { title: 'Registration #', field: 'Reg_number', initialEditValue: 'initial edit value' },
      { title: 'Trip Plan', field: 'trip_plan' },
    
    ]);
  
    const [data, setData] = useState([
      { district: 'Zomba', tollname: 'Chirunga', Reg_number: 'BT2020', trip_plan: 'Return' },
      { district: 'Zomba', tollname: 'Chirunga', Reg_number: 'LT2020', trip_plan: 'One Way' },
      { district: 'Zomba', tollname: 'Chirunga', Reg_number: 'Mz3933', trip_plan: 'Monthly' },
      
    ]);
  
    return (
      <MaterialTable
        title="Toll Bookings"
        columns={columns}
        data={data}
        // editable={{
        //   onRowAdd: newData =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         setData([...data, newData]);
                
        //         resolve();
        //       }, 1000)
        //     }),
        //   onRowUpdate: (newData, oldData) =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         const dataUpdate = [...data];
        //         const index = oldData.tableData.id;
        //         dataUpdate[index] = newData;
        //         setData([...dataUpdate]);
  
        //         resolve();
        //       }, 1000)
        //     }),
        //   onRowDelete: oldData =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         const dataDelete = [...data];
        //         const index = oldData.tableData.id;
        //         dataDelete.splice(index, 1);
        //         setData([...dataDelete]);
                
        //         resolve()
        //       }, 1000)
        //     }),
        // }}

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

  export default TollBookings