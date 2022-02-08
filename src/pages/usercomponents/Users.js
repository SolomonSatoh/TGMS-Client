import React from 'react'
import SidebarUser from './SidebarUser'
import TollDetail from './TollDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserHome from './UserHome';

function Users() {
    return (
     <div className='users'>
      <Router>
          <SidebarUser />
          <Switch>
            <Route exact path='/user-home' component={UserHome} />
            <Route path='/toll' component={TollDetail} />
           
           
          </Switch>
      </Router>
    </div>
    )
}

export default Users
