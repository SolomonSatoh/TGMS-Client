/* Importing the modules. */
import React from 'react';
import SidebarAdmin from './SidebarAdmin';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import TollDetail from './TollDetail';
import AddStaffs from './AddStaffs';
import StaffDetails from './StaffDetails';
import CustomerDetails from './CustomerDetails';
import Transactions from './Transactions';
import EntryDetails from './EntryDetails';
import ErrorPage from '../ErrorPage';
/**
 * It returns a div with a SidebarAdmin component and a Switch component with a bunch of Route
 * components.
 * @returns A React component.
 */
function Admin() {
  return (
    <div className='admin' >
      <Router>
          <SidebarAdmin />
          <Switch>
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
