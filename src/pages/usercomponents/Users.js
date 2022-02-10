import React from 'react'
import SidebarUser from './SidebarUser'
import TollDetail from './TollDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Users() {
    return (
     <div className='users' >
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
