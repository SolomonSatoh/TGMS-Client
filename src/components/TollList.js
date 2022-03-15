

import React from 'react';
import MaterialTable from 'material-table';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {Modal,TextField, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { FaShoppingCart } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
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
      width:'100%'
    }

  
}));


  

function TollList() {
  const classes = useStyles();
    const [data, setData] = useState([])
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [tollDetails, setTollDetails] = useState({
      district: " ",
      tollName: " ",
      section: " ",
      vehicleType: " ",
      regNumber: " ",
      price: " ",
      id: ""

    });
    const [age, setAge] = useState('');
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

    const haChange = (event) => {
      const selected = event.target.value
      const v = vTypes.filter(t=>t.vehicleType===selected)
      setTollDetails({...tollDetails, price:"Price: MKW "+v[0].price+ ".00"})

    };
   
    const columns = [
      {title:"District",field:"district"},
      {title:"Toll Name",field:"tollName"},
      {title:"Road Section",field:"section"},
      ];

    const baseUrl="http://localhost:3001/tolls";

    const tollModalEdit =() => {
      setModalEdit(!modalEdit);
    }
    
    const tollModalDelete =() => {
      
      setModalDelete(!modalDelete);
    }
  
    console.log(vTypes)
   
      //inserting data
      const tollModalInsert =() => {
        setModalInsert(!modalInsert);
        };
    
      // select toll
      const selectTollDetails = (district,caso) => {
        setTollDetails(district);
          (caso ==="Edit")? tollModalEdit()
          :
          tollModalDelete()
    
        };
      // handle input data function
      const handleChange = e => {
        const {name,value} = e.target;
        setTollDetails(prevState => ({
          ...prevState,
          [name]:value
    
        }))
      };
      
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
        await axios.post("http://localhost:3001/tolls/addToll",tollDetails)
        .then(response => {
          setData(data.concat(response.data))
          tollModalInsert ();
        })
      }; 
       
     
      //updating data function
      const tollPut = async() => {
        await axios.put("http://localhost:3001/tolls/update/" + tollDetails.id + "/", tollDetails)
          .then(response => {
            var dataUpdate = data;
            dataUpdate.map(district => {
              if(district.id === tollDetails.id){
                district.district = tollDetails.district;
                district.tollName = tollDetails.tollName;
                district.section = tollDetails.section;
              }
            })
            setData(dataUpdate)
            tollModalEdit()
          }).catch(error =>{
            console.log(error)
          })
          
        }; 
        
      //toll delete
      const tollDelete = async () => {
        await axios.delete( "http://localhost:3001/tolls/delete/" + tollDetails.id )
        .then(respose => {
          setData(data.filter(district => district.id!==tollDetails.id));
          tollModalDelete();
          }).catch(error=>{
            console.log(error)
          })
      }
  
      
      const bodyDelete =(
        <div className={classes.modal}>
        <p>Are you sure you want to delete <b>{tollDetails&&tollDetails.district}</b>?</p>
  
         <div align="right">
           <Button color="secondary" onClick={() => tollDelete()}>YES</Button>
           <Button onClick={() =>tollModalDelete()}>NO</Button>
         </div>
  
        </div>
      )
      // adding data form
      const bodyDataInsert =(
        <div className={classes.modal}>
          <h3 
          style={{fontWeight:'bold',
                  textAlign:"center",
                  }}>
                    Add Toll Details</h3>
  
          <TextField className={classes.inputMaterial} 
          label="District" 
          name='district'
          type="text"
          value ={tollDetails.district}
          onChange={handleChange}
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="Toll Name" 
          name='tollName'
          type="text"
          value={tollDetails.tollName}
          onChange={handleChange}
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="Road Section"
          name='section'
          type="text"
          value={tollDetails.section}
          onChange={handleChange}
  
           />
          <br/>
          <diV align="right">
            <Button color='primary' onClick={() => tollPost()}>Insert</Button>
            <Button onClick={() => tollModalInsert()}>Cancel</Button>
          </diV>
         
          </div>
           )
  
      // body edit form
      const bodyDataEdit =(
        <div className={classes.modal}>
          <h3 
          style={{fontWeight:'bold',
                  textAlign:"center",
                  }}>
                   Toll Booking Form</h3>
  
          <TextField className={classes.inputMaterial} 
          label="District" 
          placeholder='Enter District'
          name='district'
          value={tollDetails&&tollDetails.district}
  
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="Toll Name" 
          placeholder='Enter toll name'
          name='tollName'
          value={tollDetails&&tollDetails.tollName}
          
          />
          <br/>
          <TextField className={classes.inputMaterial} 
          label="Road Section"
          placeholder='Enter road section'
          name='section'
          value={tollDetails&&tollDetails.section}
  
           />
           <br/>
        
           <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Vehicle Type
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  onChange={(e)=>haChange(e)}
                  inputProps={{
                    name: 'age',
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
           placeholder='Enter road section'
           name='regNumber'
           value={tollDetails&&tollDetails.regNumber}
            />
          <br/>
          <br/>
           <TextField className={classes.inputMaterial} 
           disabled={true}
           placeholder='Enter road section'
           name='price'
           value={tollDetails&&tollDetails.price}
           onChange={handleChange}
            />
          <diV align="center">
            <Button color='primary' onClick={() => tollPut()}>Submit</Button>
            <Button onClick={() => tollModalEdit()}>Cancel</Button>
          </diV>
         
        </div>
      );
    
  return (
    
    <div>
    <IconButton align='right' 
      onClick={()=>tollModalInsert()}
      >
      <PostAddIcon/>
    </IconButton>
  
    <MaterialTable title="Toll Details"
    data={data}
    columns={columns}
    options={{
        paging:true,
        exportButton:true,
        actionsColumnIndex: -1
    }}

    actions={[
      {
        icon:FaShoppingCart,
        tooltip: 'Book Toll ',
        onClick: (event,rowData) => selectTollDetails(rowData,"Edit")
      },
     
    ]}
    />
    <Modal
    open={modalInsert}
    onClose={tollModalInsert}
    >
      {bodyDataInsert}

    </Modal>

    <Modal
    open={modalEdit}
    onClose={tollModalEdit}
    >
      {bodyDataEdit}

    </Modal>

</div>

  );
}

export default TollList;