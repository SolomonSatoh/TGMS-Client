import React from 'react';
import AllEntry from './AllEntry';
import OnlineUsers from './OnlineUsers';
import SidebarStaff from './SidebarStaff';
import UserEntry from './UserEntry';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




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
