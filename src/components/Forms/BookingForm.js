

import React,{useState, useEffect}from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {TextField, Button} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import NativeSelect from '@mui/material/NativeSelect';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useForm } from "react-hook-form";

/* A function that returns an object. */
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
/**
 * The function is called when the user clicks the submit button. 
 * 
 * The function is called "notify" and it uses the "toast" library to display a message to the user. 
 * 
 * The message is "User Entry Was Successful!" and it is displayed in the top center of the screen. 
 * 
 * The message is displayed for 2 seconds.
 */

toast.configure()
const notify = () => {
    toast.success('User Entry Was Successful!', 
    {position: toast.POSITION.TOP_CENTER,
      autoClose:2000
    })
  }
/**
 * It's a function that takes a prop called handleChange and returns a form.
 */
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
  /*Event handler input data function*/
  const handleChangeForm = ev => {
        const {name,value} = ev.target;
        setTollDetails(prevState => ({
          ...prevState,
          [name]:value
    
        }))
      };

    /* Declaring a state variable. */
  const [vTypes, setVtype] = useState([])
  const [tolls, setTolls] = useState([])
    
  /* Creating an axios instances. */
  const api = axios.create({
    baseURL: `http://localhost:3001/vehicles`
    })
  
  const baseUrlToll="http://localhost:3001/tolls";

  /**
   * GetTolls() is an async function that uses axios to get data from the baseUrlToll, then sets the
   * state of the tolls array to the data that was retrieved from the API.
   */
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
      
    
useEffect(()=>{
  api.get("/allvehicle")
    .then(Response=>{
        setVtype(Response.data)
       })
},[])
    
/**
* When the user changes the value of the select element, filter the tolls array to find the one
* that matches the selected value, then set the state of the tollDetails object to the values of
* the filtered object.
* @param e - the event object
*/
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

 /**
  * When the form is submitted, reset the form and set the submitting state to false after 2 seconds.
  * @param values - An object containing all the values of the form.
  * @param props - The props passed to your component.
  */
const onSubmit = (values, props) => {
  console.log(values)
    setTimeout(() => {
          props.resetForm()
          props.setSubmitting(false)
        }, 2000)

}

 /**
  * It takes the data from the form and sends it to the backend.
  */   
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
           User Entry Form
      </h3>
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
              /* Mapping through the tolls array and returning an option element for each item in the
              array. */
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
              onChange={haChange}
              inputProps={{
                name: 'vehicleType',
                id: 'uncontrolled-native',
            
              }}
              
            >
            {
              /* Mapping through the vTypes array and returning an option element for each item in the
              array. */
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
    );
}

export default BookingForm