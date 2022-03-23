

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
//import Alert from '@material-ui/lab/Alert';

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
  const { useState } = React;
   
  const [data, setData] = useState([]); //table data
  
  var columns = [
    {title: "id", field: "id", hidden: true},
    {title: "Vehicle Type", field: "vehicleType"},
    {title: "Price", field: "price", align: "left",
    type:"currency", currencySetting:{currencyCode:"MWK"}},
  ]
  
const api = axios.create({
baseURL: `http://localhost:3001/vehicles`
})

//for error handling
 const [iserror, setIserror] = useState(false)
 const [errorMessages, setErrorMessages] = useState([])

 
  //getting data from api
  const getVehicle=async()=>{
    await api.get("/allvehicle")
      .then(Response=>{
       setData(Response.data);
       })
    };

  useEffect(()=>{
    getVehicle();
  }, []);  
  
  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if(newData.vehicleType === undefined){
      errorList.push("Please enter vehicle type")
    }
    if(newData.price === undefined){
      errorList.push("Please enter vehicle price")
    }

    if(errorList.length < 1){ //no error
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

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
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
        
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() =>{
              handleRowAdd(newData, resolve)

            },1000)
           
          }),
          onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(()=>{
              handleRowUpdate(newData, oldData, resolve);
            },1000)  
              
          }),
          onRowDelete: (oldData) =>
             new Promise((resolve) => {
               setTimeout(()=>{
                handleRowDelete(oldData, resolve)
               },1000)
             
          }),
      }}
      options = {{
        exportButton : true,
        actionsColumnIndex: -1
        
       }}

    />
   
    )
  }

  export default VehicleDetails