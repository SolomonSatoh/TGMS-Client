import React from 'react';
import SidebarAdmin from './SidebarAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FairDetails from './FairDetails';
import TollDetails from './TollDetails';
import AddStaff from './AddStaff';
import StaffDetails from './StaffDetails';
import CustomerDetails from './CustomerDetails';
import Transactions from './Transactions';
import EntryDetails from './EntryDetails';
import Profile from './Profile';
import Home from '../Home';


function Admin() {
  return (
    <div className='admin'>
      <Router>
          <SidebarAdmin />
          <Switch>
          
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/fair' component={FairDetails} />
            <Route exact path='/tolls' component={TollDetails} />
            <Route exact path='/adds' component={AddStaff} />
            <Route exact path='/staff' component={StaffDetails} />
            <Route exact path='/customer' component={CustomerDetails} />
            <Route exact path='/trans' component={Transactions} />
            <Route exact path='/entrys' component={EntryDetails} />

          </Switch>
      </Router>
    </div> 
  );
}

export default Admin;
