import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Staff from './pages/staffComponents/Staff';
import Admin from './pages/adminComponents/Admin';
import Users from './pages/usercomponents/Users';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route  exact path='/' component={Home} />
          <Route  path='/admin' component={Admin} />
          <Route  path='/staff' component={Staff} />
          <Route  path='/users' component={Users} />
          <Route  path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
