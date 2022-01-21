import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Staff from './pages/Staff';
import Admin from './pages/Admin';
import Users from './pages/Users';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/staff' component={Staff} />
          <Route exact path='/users' component={Users} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
