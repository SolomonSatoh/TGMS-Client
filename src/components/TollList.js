import React from 'react';
import MaterialTable from 'material-table';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {Modal,TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import { jsPDF } from "jspdf";
import Paypal from './Tables/Paypal';
import { PayPalButton } from "react-paypal-button-v2";



/* A function that returns an object with the styles. */
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
 * The function is called when the user clicks the button. It then displays a message to the user.
 */
 toast.configure()
  const notify = () => {
    toast.success('Booking Was Successful, Take Receipt ', 
    {position: toast.POSITION.TOP_CENTER,
      autoClose:2000
    })
  };

function TollList() {
    /* A function that returns an object with the styles. */
    const classes = useStyles();
    const [state, setState] = useState(0);
    const [isToggled, setToggled] = useState(false)

    
    /* A state hook that is used to store data in the state. */
    const [vTypes, setVtype] = useState([])
    const [data, setData] = useState([]);
    const [modalInsert, setModalInsert] = useState(false);
    const [tollDetails, setTollDetails] = useState({
      district: " ",
      tollName: " ",
      section: " ",
      vehicleType: " ",
      regNumber: " ",
      price: " ",
    

    });
    
    /* Creating an axios instance with a base url. */
    const baseUrl="http://localhost:3001/tolls";
    const api = axios.create({
      baseURL: `http://localhost:3001/vehicles`
      })
    
   /* A react hook that is used to fetch data from the database. */
    useEffect(()=>{
      api.get("/allvehicle")
      .then(Response=>{
        setVtype(Response.data)
       })
    },[])

    /* Defining the columns of the table. */
    const columns = [
      {title:"District",field:"district"},
      {title:"Toll Name",field:"tollName"},
      {title:"Road Section",field:"section"},
      ];

    
     /**
      * When the user clicks the button, the modal will open and the user will be able to insert data.
      */
      const tollModalInsert =() => {
        setModalInsert(!modalInsert);
        };
    
      
     /**
      * If the case is insert, then call the tollModalInsert function, otherwise call the
      * tollModalInsert function.
      * @param district - is the data that I want to pass to the modal
      * @param caso - is a string that can be "Insert" or "Update"
      */
      const selectTollDetails = (district,caso) => {
        setTollDetails(district);
          (caso ==="Insert")? tollModalInsert()
          :
          tollModalInsert()
        
      };
      
      const handleChange = e => {
        const {name,value} = e.target;
        setTollDetails(prevState => ({
          ...prevState,
          [name]:value
    
        }))
      };
      

    /**
     * When the user selects a vehicle type, the price and vehicle type are set to the corresponding
     * values in the vTypes array.
     * @param event - The event object
     */
     
    /**
     * It takes the value of the select element and filters the vTypes array to find the matching
     * object. 
     * 
     * The result of the filter is an array with one element. 
     * 
     * The first element of the array is the matching object. 
     * 
     * The price and vehicleType properties of the matching object are used to update the state.
     * @param event - The event object is a JavaScript event that is sent to an element when an event
     * occurs on the element.
     */
    const haChange = (event) => {
      const selected = event.target.value
      const v = vTypes.filter(t=>t.vehicleType===selected)
      console.log(v)
      setTollDetails({...tollDetails, price:
        v[0].price,vehicleType: v[0].vehicleType})

    };
    
    /**
     * It takes in an object with the following properties: name, price, district, section,
     * vehicleType, regNumber. It then creates a pdf file with the data passed in the object
     * @param data - This is the data that you want to export to pdf.
     */
    const exportToPdf = (data)=>{
      const doc = new jsPDF('p', 'mm', [100, 100]);      
      doc.text("TOLL ENTRY RECEIPT\n\nToll name : "+ data.name+ "\nPrice: MKW "+data.price+"\nDistric : "+data.district+"\nSection : "+data.section+ "\nVehicle Type : "+data.vehicleType + "\nReg Number : "+data.regNumber, 1,20);  
      const date = new Date()
      doc.save("Toll Details"+date.getMilliseconds()+".pdf");
    }
   
 /**
  * It gets the data from the API and sets the data to the state.
  */
 /**
  * The useEffect hook is used to call the getTolls function when the component is mounted.
  */
 
      const getTolls=async()=>{
        await axios.get(baseUrl)
        .then(Response=>{
          setTimeout(()=>{
            setData(Response.data);
          },1000)
          
        })
      };
  
      useEffect(()=>{
        getTolls();
      }, []);
      
     /* Posting the data to the database. */
     
      const tollPost = async() => {
        console.log(tollDetails)
        await axios.post("http://localhost:3001/bookings/addBooking",tollDetails)
        .then(response => {
          console.log(response)
          
         /* Creating an object with the properties name, district, price, vehicleType, section,
         regNumber. */
          const resData = {
            name : response.data.tollName,
            district : response.data.district, 
            price : response.data.price,
            vehicleType : response.data.vehicleType,
            section: response.data.section,
            regNumber: response.data.regNumber
          }
          tollModalInsert();
          exportToPdf(resData)
          
        })
      };
      console.log('Toll Details',tollDetails)

    
     /* A modal form for inserting data into the database. */
      const bodyDataInsert =(
        <div className={classes.modal}>
          <h3 
          style={{fontWeight:'bold',
                  textAlign:"center",
                  }}>
                  Toll Booking Form</h3>
  
          <TextField className={classes.inputMaterial}
            label="District" 
            name='district'
            type="text"
            onChange={handleChange}
            value ={tollDetails.district}
            
          />
          <br/>
          <TextField className={classes.inputMaterial} 
            label="Toll Name" 
            name='tollName'
            type="text"
            onChange={handleChange}
            value={tollDetails.tollName}
          />
          <br/>
          <TextField className={classes.inputMaterial} 
            label="Road Section"
            name='section'
            type="text"
            onChange={handleChange}
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
                  vTypes.map((v, index)=>{
                    return <option key={index} value={v.vehicleType}>{v.vehicleType}</option>})
                }
                 
                </NativeSelect>
              </FormControl>
            </Box>
          <br/>
          <TextField className={classes.inputMaterial} 
            label="RegNumber"
            placeholder='RegNumber'
            name='regNumber'
            value={tollDetails.regNumber}
            onChange={handleChange}
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
            <Button color='primary' onClick={ () => {tollPost(); notify(); setToggled(!isToggled)}}>CONFIRM</Button>
            <Button onClick={() => tollModalInsert()}>Cancel</Button>
          </diV>
         
          </div>
       )

       
    
  
    
  return (
    
    <div>
      {isToggled && <Paypal tollDetails={tollDetails}/>}

      <MaterialTable title="Toll Details"
        data={data}
        columns={columns}
        options={{
            paging:true,
            actionsColumnIndex: -1
        }}

      /* An array of objects that is used to add an action to the table. */
      actions={[
        {
          icon:PostAddIcon,
          tooltip: 'Book Toll ',
          onClick: (event,rowData) => selectTollDetails(rowData,"Insert")
        },
      
      ]}
      />
      <Modal
        open={modalInsert}
        onClose={tollModalInsert}
        >
          {bodyDataInsert}
      </Modal>

    </div>

  );
}

export default TollList;