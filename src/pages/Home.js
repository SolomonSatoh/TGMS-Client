
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* A custom styling for the component. */
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

/**
 * It returns a div with a class of home, which contains a h1 with a class of title, which contains a
 * span with a class of welcome, which contains the text "Welcome to", and a br tag, which contains a
 * span with a class of colorText, which contains the text "Tollgate Management System."
 * @returns A div with a h1 inside it.
 */
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
  <h1 className={classes.title}> <span className={classes.welcome} >Welcome to</span>  <br /> <span className= {classes.colorText}>Tollgate Management System.</span></h1>
    </div>
  );
}

export default Home;
