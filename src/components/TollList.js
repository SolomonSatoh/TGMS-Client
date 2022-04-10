

import React from 'react';
import MaterialTable from 'material-table';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {Modal,TextField, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { FaShoppingCart } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import { jsPDF } from "jspdf";

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
    toast.success('Booking Was Successful, Take Receipt ', 
    {position: toast.POSITION.TOP_CENTER,
      autoClose:2000
    })
  }

function TollList() {
  const classes = useStyles();
    const [data, setData] = useState([])
    const [modalInsert, setModalInsert] = useState(false);
    const [tollDetails, setTollDetails] = useState({
      district: " ",
      tollName: " ",
      section: " ",
      vehicleType: " ",
      regNumber: " ",
      price: " ",
    

    });
    const [vTypes, setVtype] = useState([])

    const api = axios.create({
      baseURL: `http://localhost:3001/vehicles`
      })
    
    useEffect(()=>{
      api.get("/allvehicle")
      .then(Response=>{
        setVtype(Response.data)
       })
    },[])

    const columns = [
      {title:"District",field:"district"},
      {title:"Toll Name",field:"tollName"},
      {title:"Road Section",field:"section"},
      ];

    const baseUrl="http://localhost:3001/tolls";

    console.log(vTypes)
   
      //inserting data
      const tollModalInsert =() => {
        setModalInsert(!modalInsert);
        };
    
      // select toll details on a clicked table raw
      const selectTollDetails = (district,caso) => {
        setTollDetails(district);
          (caso ==="Insert")? tollModalInsert()
          :
          tollModalInsert()
    
        };
      // handle input data function
      const handleChange = e => {
        const {name,value} = e.target;
        setTollDetails(prevState => ({
          ...prevState,
          [name]:value
    
        }))
      };
     //select get price based on  selected vehicle type
    const haChange = (event) => {
      const selected = event.target.value
      const v = vTypes.filter(t=>t.vehicleType===selected)
      console.log(v)
      setTollDetails({...tollDetails, price:
        v[0].price,vehicleType: v[0].vehicleType})

    };

    const exportToPdf = (data)=>{
      const doc = new jsPDF('p', 'mm', [100, 100]);      
      doc.text("TOLL ENTRY RECEIPT\n\nToll name : "+ data.name+ "\nPrice: MKW "+data.price+"\nDistric : "+data.district+"\nSection : "+data.section+ "\nVehicle Type : "+data.vehicleType + "\nReg Number : "+data.regNumber, 1,20);  
      const date = new Date()
      doc.save("Toll Details"+date.getMilliseconds()+".pdf");
    }
   
  //getting data from api
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
      
      // posting data into database through api
      const tollPost = async() => {
        console.log(tollDetails)
        await axios.post("http://localhost:3001/bookings/addBooking",tollDetails)
        .then(response => {
          console.log(response)
          //setData(data.concat(response.data))

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

     // adding data form
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
            <Button color='primary' onClick={ () => {tollPost(); notify()}}>CONFIRM</Button>
            <Button onClick={() => tollModalInsert()}>Cancel</Button>
          </diV>
         
          </div>
       )
  
    
  return (
    
    <div>
    
    <MaterialTable title="Toll Details"
    data={data}
    columns={columns}
    options={{
        paging:true,
        actionsColumnIndex: -1
    }}

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