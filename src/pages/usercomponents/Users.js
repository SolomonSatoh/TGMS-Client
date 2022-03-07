import React from 'react'
import SidebarUser from './SidebarUser'
import TollDetail from './TollDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookingForm from '../../components/Forms/BookingForm'; 

function Users() {
    return (
     <div className='users' >
      <Router basename='/user'>
          <SidebarUser />
          <Switch>
            <Route exact path='/toll' component={TollDetail} />
            <Route path='/booking' component={BookingForm} />
           
          </Switch>
      </Router>
    </div>
    )
}

export default Users
