
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//A custome styling for the component
const useStyles = makeStyles((theme) => ({
  colorText: {
    color: '#5AFF3D',
  },
  home: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    fontSize: '2.5rem',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/toll3.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  welcome: {
    
    marginLeft: '300px',
  },
  
}));
//This function directs the  landing page of the system
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
  <h1 className={classes.title}> <span className={classes.welcome} >Welcome to</span>  <br /> <span className= {classes.colorText}>Tollgate Management System.</span></h1>
    </div>
  );
}

export default Home;
