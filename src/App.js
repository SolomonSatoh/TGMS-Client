import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Staff from './pages/staffComponents/Staff';
import Admin from './pages/adminComponents/Admin';
import Users from './pages/usercomponents/Users';
import ErrorPage from './pages/ErrorPage';
import Login from './components/Forms/Login';


function App() {
  return (
    <div> 
      <Router>
        <Navbar />
        <Switch>
          <Route  exact path='/' component={Home} />
          <Route  path='/admin' component={Admin} />
          <Route  path='/staff' component={Staff} />
          <Route  path='/users' component={Users} />
          <Route  path="*" component={ErrorPage} />
          <Route path ='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
