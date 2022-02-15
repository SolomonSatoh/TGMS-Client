
import React from 'react';
import MaterialTable from 'material-table';
import  {useState, useEffect} from 'react';
import axios from 'axios';

const TollDetails = () => {
    // const { useState } = React;
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
  
    const [columns, setColumns] = useState([
      { title: 'District', field: 'district' },
      { title: 'Toll Name', field: 'tollName', initialEditValue: 'initial edit value' },
      { title: 'Road Section', field: 'section' },
    
    ]);
   
    // const [data, setData] = useState([
    //   { district: 'Lilongwe', tollname: 'Area 25', roadsection: 'Bt - Lilongwe' },
    //   { district: 'Mzimba', tollname: 'Luviri', roadsection: 'Jenda - Mzimba Boma'},
    //   { district: 'Blantyre' , tollname: 'Kameza', roadsection: 'Blantyre Town - Lunzu' },
    //   { district: 'Zomba', tollname: '3 Miles', roadsection: 'Limbe - Zomba'},
    // ]);
    const baseUrl="http://localhost:3001/tolls/";

    const getTolls=async()=>{
      await axios.get(baseUrl)
      .then(Response=>{
        setData(Response.data);
      })
    }
     
    useEffect(()=>{
      getTolls();
    }, [])

    return (
      <MaterialTable
        title="Toll Details"
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
          backgroundColor: (selectedRow === rowData.tableData.id) ? null : '#FFF'
        })
      }}

      options = {{
          exportButton : true,
          searchFieldAlignment : "right"
      }}

      
      />
    )
  }

  export default TollDetails