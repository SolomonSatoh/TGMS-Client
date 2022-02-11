import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Staff from './pages/staffComponents/Staff';
import Admin from './pages/adminComponents/Admin';
import Users from './pages/usercomponents/Users';
import ErrorPage from './pages/ErrorPage';
import Login from './components/Forms/Login';
import LoginAdmin from './components/Forms/LoginAdmin';
import Signup from './components/Forms/Signup';
import LoginStaff from './components/Forms/LoginStaff';


function App() {
  return (
    <div> 
      <Router>
        <Navbar />
        <Switch>
          <Route path ='/login-main' component={LoginAdmin} />
          <Route path = '/login-staff' component={LoginStaff} />
          <Route path ='/sign' component={Signup} />
          <Route path ='/login' component={Login} />
          <Route  exact path='/' component={Home} />
          <Route  path='/admin' component={Admin} />
          <Route  path='/staff' component={Staff} />
          <Route  path='/users' component={Users} />
          <Route  path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
