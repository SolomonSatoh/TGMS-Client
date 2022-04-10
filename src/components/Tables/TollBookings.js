/* Importing the necessary modules. */
import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

const TollBookings = () => {
  /* A state hook that is used to store data from the API. */
  const [data, setData] = useState([]); 

  /* Setting the columns of the table. */
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
  
    
  /* Creating an axios instance. */
  const api = axios.create({
    baseURL: `http://localhost:3001/bookings`
  })

  /**
   * When the component mounts, get the data from the API and set the state to the data.
   */
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
      
      /* Setting the options of the table. */
      options = {{
        exportButton : true,
        actionsColumnIndex: -1
        
       }}

    />
    )
  }

export default TollBookings