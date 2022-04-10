/* Importing all the necessary components from the libraries. */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import * as IoIcons from 'react-icons/io';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';


/* A function that returns an object for custom styling. */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    align: "center",
  },
  userItem: {

  },
  icon:{
    fontSize: '3rem',
    margin:'20px',
  }
}));

function Navbar() {
  /* A state variable that is used to toggle the sidebar. */
  const [sidebar, setSidebar] = useState(false);

/* A function that returns an object for custom styling. */
  const classes = useStyles();

  /* A hook that allows you to access the history object's properties and the closest <Route>'s match
  via the withRouter higher-order component. withRouter will pass updated match, location, and
  history props to the wrapped component whenever it renders. */
  let history = useHistory();

  /**
   * When the showSidebar function is called, it will set the sidebar state to the opposite of what it
   * currently is.
   */
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar  >
          <Toolbar className='navbar' variant="dense">
            <IconButton  
              className={classes.icon}
              edge="start" 
              color="inherit"
              size="large" 
              aria-label="menu" 
              sx={{ mr: 2 }}>

               <MenuIcon  onClick={showSidebar} />
            
            </IconButton>
            <Typography variant="h5"  component="div"  className={classes.title}>
              TOLLGATE MANAGEMENT SYSTEM
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='nav-text'>
              <Link to='/' className='nav-text'>
                <AiIcons.AiFillHome />
                <span><p>HOME</p></span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick= { () => {history.push("/login-main");}}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })};
            <li className='nav-text'>
              <Link to="/login-staff" className='nav-text'>
                <IoIcons.IoMdPeople />
                <span><p>STAFF</p></span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/users' className='nav-text'>
                <FaIcons.FaUserAlt />
                <span><p>USERS</p></span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
