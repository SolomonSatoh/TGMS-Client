/* Importing the components that are needed for the Staff component. */
import React from 'react';
import AllEntry from './AllEntry';
import SidebarStaff from './SidebarStaff';
import UserEntry from './UserEntry';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * It renders a sidebar and a switch that renders either the UserEntry or AllEntry component.
 * @returns A div with a router and a switch.
 */
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
