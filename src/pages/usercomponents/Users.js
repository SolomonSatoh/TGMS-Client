import React from 'react'
import SidebarUser from './SidebarUser'
import TollDetail from './TollDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookingForm from '../../components/Forms/BookingForm'; 


function Users() {
    return (
     <div className='users' >
      <Router>
          <SidebarUser />
          <Switch>
            <Route path='/booking' component={BookingForm} />
            <Route path='/user/toll' component={TollDetail} />
           
           
          </Switch>
      </Router>
    </div>
    )
}

export default Users
