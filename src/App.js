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

//Base component for the sytems all routes
function App() {
  return (
    <div> 
      <Router basename='tgms-client'>
        <Navbar />
        <Switch>
          <Route path ='/login-main' exact component={LoginAdmin} />
          <Route path = '/login-staff' exact component={LoginStaff} />
          <Route path ='/sign' exact component={Signup} />
          <Route path ='/login' exact component={Login} />
          <Route  path='/' exact component={Home} />
          <Route  path='/admin' exact component={Admin} />
          <Route  path='/staff' exact component={Staff} />
          <Route  path='/users' exact component={Users} />
          <Route  path="*" exact component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
