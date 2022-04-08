

import React,{useState, useEffect}from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Grid, Paper, Avatar, TextField, Button} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import NativeSelect from '@mui/material/NativeSelect';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      height: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #4caf50',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4,3),
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)'
    },
    
      iconos:{
        cursor:'pointer'
      },
      inputMaterial:{
        width:'100%',
        color: 'primary',
      }
      
  
    }));
  toast.configure()

  const notify = () => {
    toast.success('User Entry Was Successful!', 
    {position: toast.POSITION.TOP_CENTER,
      autoClose:2000
    })
  }
const BookingForm = ({ handleChange }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const classes = useStyles();
    const [data, setData] = useState([])
    const [tollDetails, setTollDetails] = useState({
        district: " ",
        tollName: " ",
        section: " ",
        vehicleType: " ",
        regNumber: " ",
        price: " ",
      
  
      });
       // handle input data function
       const handleChangeForm = ev => {
        const {name,value} = ev.target;
        setTollDetails(prevState => ({
          ...prevState,
          [name]:value
    
        }))
      };

    const [vTypes, setVtype] = useState([])
    const [tolls, setTolls] = useState([])
    
    const baseUrlToll="http://localhost:3001/tolls";
    //getting data from api
    const getTolls=async()=>{
        await axios.get(baseUrlToll)
        .then(Response=>{
          setTimeout(()=>{
            setTolls(Response.data);
          },1000)
          
        })
      };

      useEffect(()=>{
        getTolls();
      }, []);
      
    const api = axios.create({
      baseURL: `http://localhost:3001/vehicles`
      })
    
    useEffect(()=>{
      api.get("/allvehicle")
      .then(Response=>{
        setVtype(Response.data)
       })
    },[])
    
    const handleChangeToll = (e) => {
        const selected = e.target.value
        const v = tolls.filter(t=>t.tollName===selected)
        console.log(v)
        setTollDetails({...tollDetails, district:
          v[0].district, tollName: v[0].tollName, section: v[0].section })
  
    };
    const haChange = (event) => {
        const selected = event.target.value
        const v = vTypes.filter(t=>t.vehicleType===selected)
        console.log(v)
        setTollDetails({...tollDetails, price:
          v[0].price,vehicleType: v[0].vehicleType})
  
      };

  
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }

     
      // posting data into database through api
      const tollPost = async() => {
        console.log(tollDetails)
        await axios.post("http://localhost:3001/bookings/addBooking",tollDetails)
        .then(response => {
          console.log(response)
          setData(data.concat(response.data))
        })
      };
    return (
        <div className={classes.modal}>
          <h3 
          style={{fontWeight:'bold',
                  textAlign:"center",
                  }}>
                  User Entry Form</h3>
          <br/>
          <form>
           <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel variant="standard" htmlFor="uncontrolled-native">
               Toll Name
             </InputLabel>
             <NativeSelect
               defaultValue={30}
               onChange={handleChangeToll}
               inputProps={{
                 name: 'TollName',
                 id: 'uncontrolled-native',
             
               }}
              
             >
             {
               tolls.map((v, index)=>{
                 return <option key={index} value={v.tollName}>{v.tollName}</option>})
             }
              
             </NativeSelect>
           </FormControl>
         </Box>
            <br/>
            <TextField className={classes.inputMaterial} 
            label="District" 
            name='district'
            type="text"
            onChange={handleChangeForm}
            value={tollDetails.district}
            />
            <br/>
            <TextField className={classes.inputMaterial} 
            label="Road Section"
            name='section'
            type="text"
            onChange={handleChangeForm}
            value={tollDetails.section}
            />
            <br/>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Vehicle Type
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              //value={tollDetails.vehicleType}
              onChange={haChange}
              inputProps={{
                name: 'vehicleType',
                id: 'uncontrolled-native',
            
              }}
              
            >
            {
              vTypes.map((v, index)=>{
                return <option key={index} value={v.vehicleType}>{v.vehicleType}</option>})
            }
              
            </NativeSelect>
            </FormControl>
            </Box>
            <br/>
            <TextField className={classes.inputMaterial } 
            label="RegNumber"
            placeholder='RegNumber'
            name='regNumber'
            value={tollDetails.regNumber}
            onChange={handleChangeForm}
            />
            <br/>
            <TextField className={classes.inputMaterial} 
            placeholder='Price'
            name='price'
            onChange={handleChange}
            value={tollDetails.price}
            />
            <br/>  
            <diV align="center">
            <Button color='primary' onClick={ () => {tollPost(); notify()}}>CONFIRM</Button>
            </diV>
           </form>
                          
         
          </div>
    )
}

export default BookingForm