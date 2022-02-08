import React from 'react';
import SidebarAdmin from './SidebarAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TollDetail from './TollDetail';
import AddStaffs from './AddStaffs';
import StaffDetails from './StaffDetails';
import CustomerDetails from './CustomerDetails';
import Transactions from './Transactions';
import EntryDetails from './EntryDetails';
import Profile from './Profile';
import AdminHome from './AdminHome';
import ErrorPage from '../ErrorPage';


function Admin() {
  return (
    <div className='admin' >
      <Router>
          <SidebarAdmin />
          <Switch>
            <Route  path='/admin/profile' component={Profile} />
            <Route  path='/admin/tolls' component={TollDetail} />
            <Route  path='/admin/adds' component={AddStaffs} />
            <Route  path='/admin/staff' component={StaffDetails} />
            <Route  path='/admin/customer' component={CustomerDetails} />
            <Route  path='/admin/trans' component={Transactions} />
            <Route  path='/admin/entrys' component={EntryDetails} />
            <Route  path="*" component={ErrorPage} />

          </Switch>
      </Router>
    </div> 
  );
}

export default Admin;
