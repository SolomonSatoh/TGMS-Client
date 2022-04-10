import React from 'react';
import AllEntry from './AllEntry';
import SidebarStaff from './SidebarStaff';
import UserEntry from './UserEntry';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Base component for all staff routes
function Staff() {
  return (
    <div className='staff'>
      <Router>
          <SidebarStaff />
          <Switch>
            <Route exact path='/staff/user' component={UserEntry} />
            <Route exact path='/staff/entry' component={AllEntry} />
          </Switch>

      </Router>
    </div>
  );
}

export default Staff;
