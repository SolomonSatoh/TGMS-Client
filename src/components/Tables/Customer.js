

import React from 'react'
import MaterialTable from 'material-table'

const Customer = () => {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);
  
    const [columns, setColumns] = useState([
      { title: 'District', field: 'district' },
      { title: 'Toll Name', field: 'tollname' },
      {title: 'Registration #', field: 'Reg'},
      { title: 'Email', field: 'email' },
      {title: 'Time', field: 'time'}
    
    
    ]);
  
    const [data, setData] = useState([
      { district: 'Zomba', tollname: '3miles',  Reg: 'RT334', email: 'aaa@gmail.com', time:'10:00hrs', },
      { district: 'Mzimba', tollname: 'Jandalala',  Reg: 'BB334', email: 'wwww@gmail.com', time:'21:00hrs',},
      { district: 'Blantyre', tollname: 'Kameza',  Reg: 'KK334', email: 'qqq@gmail.com',time:'23:00hrs',},

    ]);
  
    return (
      <MaterialTable
        title="Customer Booking Details"
        columns={columns}
        data={data}
        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
        })
      }}

      options = {{
          exportButton : true,
      }}

      
      />
    )
  }

  export default Customer