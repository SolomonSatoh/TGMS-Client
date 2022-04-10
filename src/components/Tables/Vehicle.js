

import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

/* A table icons. */
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const VehicleDetails = () => {
 /* A hook that allows you to use state in a functional component. */
  const { useState } = React; 
  const [data, setData] = useState([]);
  
  /* Defining the columns of the table. */
  var columns = [
    {title: "id", field: "id", hidden: true},
    {title: "Vehicle Type", field: "vehicleType"},
    {title: "Price", field: "price", align: "left",
    type:"currency", currencySetting:{currencyCode:"MWK"}},
  ]
 /* Creating an axios instance. */  
const api = axios.create({
baseURL: `http://localhost:3001/vehicles`
})

/* A hook that allows you to use state in a functional component. */
 const [iserror, setIserror] = useState(false)
 const [errorMessages, setErrorMessages] = useState([])

 /**
  * GetVehicle() is an async function that uses the useEffect hook to call the getVehicle() function,
  * which uses the axios library to make a GET request to the API, and then sets the data returned from
  * the API to the data state variable.
  */
  
const getVehicle=async()=>{
    await api.get("/allvehicle")
      .then(Response=>{
       setData(Response.data);
       })
    };

  useEffect(()=>{
    getVehicle();
  }, []);  
  
  /**
   * If there are no errors, then add the new data to the database and then add the new data to the
   * table. If there are errors, then display the errors.
   * @param newData - the data that the user entered
   * @param resolve - A function that should be called when the operation is completed.
   */
  const handleRowAdd = (newData, resolve) => {
    let errorList = []
    if(newData.vehicleType === undefined){
      errorList.push("Please enter vehicle type")
    }
    if(newData.price === undefined){
      errorList.push("Please enter vehicle price")
    }

    if(errorList.length < 1){ 
      api.post("/addVehicle", newData)
      .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }

  }
  
  /**
   * It deletes a row from the table and the database.
   * @param oldData - The data of the row that was deleted.
   * @param resolve - A function that you must call when you're done with your async action, whether it
   * succeeded or failed.
   */
  const handleRowDelete = (oldData, resolve) => {
    
    api.delete("/delete/"+oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }

/**
 * It takes in newData, oldData, and resolve as parameters. It then checks if the newData.vehicleType
 * and newData.price are empty. If they are, it pushes an error message to the errorList array. If they
 * aren't, it makes a PUT request to the API. If the request is successful, it updates the data and
 * resolves the promise. If the request fails, it sets the errorMessages and isError state variables.
 * @param newData - The new data for the row.
 * @param oldData - The data that was previously in the row.
 * @param resolve - A function that you must call when your update is finished.
 */

  const handleRowUpdate = (newData, oldData, resolve) => {
    let errorList = []
    if(newData.vehicleType === ""){
      errorList.push("Please enter vehicle type")
    }
    if(newData.price === ""){
      errorList.push("Please enter vehicle price")
    }

    if(errorList.length < 1){
      api.put("/update/"+newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])
      })
      .catch(error => {
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
        
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }
    
  }

  return (
   
    <MaterialTable
      title="Vehicle Details"
      columns={columns}
      data={data}
      icons={tableIcons}
      editable={{
        
        /* A function that is called when the user clicks the add button. It takes in newData as a
        parameter. It then creates a new promise and calls the handleRowAdd function. */
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() =>{
              handleRowAdd(newData, resolve)

            },1000)
           
          }),

         /* A function that is called when the user clicks the update button. It takes in newData and
         oldData as parameters. It then creates a new promise and calls the handleRowUpdate
         function. */
          onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(()=>{
              handleRowUpdate(newData, oldData, resolve);
            },1000)  
              
          }),

          /* A function that is called when the user clicks the delete button. It takes in oldData as a
          parameter. It then creates a new promise and calls the handleRowDelete function. */
          onRowDelete: (oldData) =>
             new Promise((resolve) => {
               setTimeout(()=>{
                handleRowDelete(oldData, resolve)
               },1000)
             
          }),
      }}
      
     /* Setting the export button to true and the actions column index to -1. */
      options = {{
        exportButton : true,
        actionsColumnIndex: -1
        
       }}

    />
   
    )
  }

  export default VehicleDetails