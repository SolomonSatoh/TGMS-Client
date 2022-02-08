

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  colorText: {
    color: '#5AFF3D',
  },
  back: {
   
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/useer.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
  
}));

function UserHome() {
  const classes = useStyles();
  return (
    <div className={classes.back}>
    </div>
  );
}

export default UserHome;
