import React from 'react';
import AllEntry from './AllEntry';
import OnlineUsers from './OnlineUsers';
import SidebarStaff from './SidebarStaff';
import UserEntry from './UserEntry';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StaffHome from './StaffHome';


function Staff() {
  return (
    <div className='staff'>

      <Router>
          <SidebarStaff />
          <Switch>
            <Route exact path='/staff-home' component={StaffHome} />
            <Route exact path='/staff/user' component={UserEntry} />
            <Route exact path='/staff/entry' component={AllEntry} />
            <Route exact path='/staff/online' component={OnlineUsers} />
          </Switch>

      </Router>
    </div>
  );
}

export default Staff;
