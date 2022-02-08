

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/staff6.jpg'})`,
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

function StaffHome() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
    </div>
  );
}

export default StaffHome;
