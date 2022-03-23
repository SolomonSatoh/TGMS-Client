import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'


const Customer = () => {
    
    const [data, setData] = useState([]); //table data
    const [columns, setColumns] = useState([
      { title: 'District', field: 'district' },
      { title: 'Toll Name', field: 'tollName' },
      { title: 'Section', field: 'section' },
      { title: 'Vehicle Type', field: 'vehicleType' },
      {title: 'Registration #', field: 'regNumber'},
      {title: 'Price', field: 'price', align: "left",
      type:"currency", currencySetting:{currencyCode:"MWK"}},
      {title: 'Date/Time', field: 'createdAt', type: 'date',
         dateSetting: {
        format: 'dd/MM/yyyy'
      }}
    
    
    ]);
    
      
    const api = axios.create({
      baseURL: `http://localhost:3001/bookings`
    })
  
    //getting data from api
    const getBookings=async()=>{
    await api.get("/")
      .then(Response=>{
       setData(Response.data);
       })
    };

    useEffect(()=>{
       getBookings();
    }, []);  

    return (
      <MaterialTable
      title=" USER TOLL ENTRIES"
      columns={columns}
      data={data}
      
      options = {{
        exportButton : true,
        actionsColumnIndex: -1
        
       }}

    />
    )
  }

  export default Customer