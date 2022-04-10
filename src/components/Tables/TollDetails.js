
import React from 'react';
import MaterialTable from 'material-table';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Modal,TextField, IconButton } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

/* A function that returns an object. */
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    height: 300,
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
      width:'100%'
    }

  
}));

const TollDetails = () => {
  /*Functions that return an object. */
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [tollDetails, setTollDetails] = useState({
      district: " ",
      tollName: " ",
      section: " ",
      id: ""

    });
   
    /* Creating a table with three columns. */
    const columns = [
      {title:"District",field:"district"},
      {title:"Toll Name",field:"tollName"},
      {title:"Road Section",field:"section"}
      
    ];

    /* A variable that stores the url of the api. */
    const baseUrl="http://localhost:3001/tolls";
    
  /**
   * When the user clicks the button, the modalEdit state is set to the opposite of what it was before
   * the user clicked the button.
   */
  const tollModalEdit =() => {
    setModalEdit(!modalEdit);
  }
  
  /**
   * When the user clicks the delete button, the modalDelete state is set to true, which triggers the
   * modal to open.
   */
  const tollModalDelete =() => {
    
    setModalDelete(!modalDelete);
  }

 
  /**
   * When the user clicks the button, the modal will open and the button will change to a close button.
   */
  const tollModalInsert =() => {
      setModalInsert(!modalInsert);
    };
  
  /**
   * When the user clicks on the edit or delete button, the function will set the state of the
   * tollDetails to the district that was clicked on, and then it will either open the edit modal or
   * the delete modal depending on which button was clicked.
   * @param district - is the data that I want to pass to the modal
   * @param caso - is a string that can be "Edit" or "Delete"
   */
  
  const selectTollDetails = (district,caso) => {
      setTollDetails(district);
        (caso ==="Edit")? tollModalEdit()
        :
        tollModalDelete()
  
  };
      
  /*handle input data function */
  const handleChange = e => {
      const {name,value} = e.target;
      setTollDetails(prevState => ({
        ...prevState,
        [name]:value
  
      }))
  };
    
    
  /**
   * It makes an API call to the server, waits for a response, and then sets the data to the state.
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

/**
 * TollPost() is an async function that posts the tollDetails object to the server, then concats the
 * response data to the data array, and finally calls the tollModalInsert() function.
 */
    
const tollPost = async() => {
      await axios.post("http://localhost:3001/tolls/addToll",tollDetails)
      .then(response => {
        setData(data.concat(response.data))
        tollModalInsert ();
      })
}; 
     
   
 /**
  * TollPut() is an async function that uses axios to make a PUT request to the server, and then
  * updates the data in the table with the new data.
  */  
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
      
  /**
   * When the user clicks the delete button, the function tollDelete is called, which deletes the
   * selected toll from the database and then removes it from the table.
   */
  const tollDelete = async () => {
      await axios.delete( "http://localhost:3001/tolls/delete/" + tollDetails.id )
      .then(respose => {
        setData(data.filter(district => district.id!==tollDetails.id));
        tollModalDelete();
        }).catch(error=>{
          console.log(error)
        })
  }

  /* A function that returns an object. */
  const bodyDelete =(
      <div className={classes.modal}>
      <p>Are you sure you want to delete <b>{tollDetails&&tollDetails.district}</b>?</p>

       <div align="right">
         <Button color="secondary" onClick={() => tollDelete()}>YES</Button>
         <Button onClick={() =>tollModalDelete()}>NO</Button>
       </div>

      </div>
    )


  /* Creating a modal that will be used to insert data into the table. */
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

    
    /* Creating a modal that will be used to edit data in the table. */
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
       /* An object that is passed to the MaterialTable component. It is used to set the options of the
       table. */
        options={{
            paging:true,
            exportButton:true,
            actionsColumnIndex: -1
        }}

      /* Creating two buttons, one for editing and one for deleting. */
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