import React from 'react'
import SidebarUser from './SidebarUser'
import TollDetails from './TollDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';

function Users() {
    return (
     <div className='users'>
      <Router>
          <SidebarUser />
          <Switch>
            <Route exact path='/toll' component={TollDetails} />
           
           
          </Switch>
      </Router>
    </div>
    )
}

export default Users
