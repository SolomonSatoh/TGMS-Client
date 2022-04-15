import React from 'react'
import SidebarUser from './SidebarUser'
import TollDetail from './TollDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


/**
 * It returns a div with a Router component that has a basename of /user. Inside the Router component
 * is a SidebarUser component and a Switch component. Inside the Switch component are two Route
 * components. The first Route component has an exact path of /toll and a component of TollDetail. The
 * second Route component has a path of /booking and a component of BookingForm.
 * @returns A div with a Router and a Switch.
 */
function Users() {
    return (
     <div className='users' >
      <Router basename='/user'>
          <SidebarUser />
          <Switch>
            <Route exact path='/toll' component={TollDetail} />
           
          </Switch>
      </Router>
    </div>
    )
}

export default Users
