import React from 'react'
import SidebarUser from './SidebarUser'
import TollDetail from './TollDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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


function Users() {
  const classes = useStyles();
    return (
     <div className='users' className={classes.back}>
      <Router>
          <SidebarUser />
          <Switch>
            <Route path='/user/toll' component={TollDetail} />
           
           
          </Switch>
      </Router>
    </div>
    )
}

export default Users
