
import React from 'react';
import MaterialTable from 'material-table';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {Modal,TextField, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import BookingForm from '../Forms/BookingForm';
import { ShoppingBasket, ShoppingCart } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    height: 300,
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


const TollDetails = () => {
  const classes = useStyles();
    const [data, setData] = useState([])
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [tollDetails, setTollDetails] = useState({
      district: " ",
      tollName: " ",
      section: " ",
      id: ""

    });
   
    const columns = [
      {title:"District",field:"district"},
      {title:"Toll Name",field:"tollName"},
      {title:"Road Section",field:"section"}
      
      ];

    const baseUrl="http://localhost:3001/tolls";
    
  //editting data in the api
  const tollModalEdit =() => {
    setModalEdit(!modalEdit);
  }
  
  const tollModalDelete =() => {
    
    setModalDelete(!modalDelete);
  }

 
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
    //adding data form
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
                 Edit Toll Details</h3>

        <TextField className={classes.inputMaterial} 
        label="District" 
        placeholder='Enter District'
        name='district'
        onChange={handleChange}
        value={tollDetails&&tollDetails.district}

        />
        <br/>
        <TextField className={classes.inputMaterial} 
        label="Toll Name" 
        placeholder='Enter toll name'
        name='tollName'
        onChange={handleChange}
        value={tollDetails&&tollDetails.tollName}
        
        />
        <br/>
        <TextField className={classes.inputMaterial} 
        label="Road Section"
        placeholder='Enter road section'
        name='section'
        onChange={handleChange}
        value={tollDetails&&tollDetails.section}

         />
        <br/>
        <diV align="right">
          <Button color='primary' onClick={() => tollPut()}>Edit</Button>
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
          icon:Edit,
          tooltip: 'Edit ',
          onClick: (event,rowData) => selectTollDetails(rowData,"Edit")
        },
        {
          icon:Delete,
          tooltip:'delete',
          onClick:(event,rowData) => selectTollDetails(rowData,"Delete")
        }
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

      <Modal
      open={modalDelete}
      onClose={tollModalDelete}
      >
        {bodyDelete}

      </Modal>

  </div>


    );
  }

  export default TollDetails;