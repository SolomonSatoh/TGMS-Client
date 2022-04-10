import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {UserSidebarData} from './UserSidebarData'
import { IconContext } from 'react-icons';
import './UserNavbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, Redirect } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

//Custome styling for this component
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userItem: {

  },
  icon:{
    fontSize: '2rem'
  }
}));

function SidebarUser() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    let history = useHistory();

    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    //event handler for user login & logout icon
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    //event handler for logout icon
    const handleClose = () => {
      setAnchorEl(null);
    };
     
   
  
    return (
      <div className={classes.root}>
        
          <IconContext.Provider value={{ color: '#fff' }}>
          <Box sx={{ flexGrow: 1 }}>
          <AppBar  >
            <Toolbar className='navbar' variant="dense">
              <IconButton  
                className='menu-bars' 
                edge="start" 
                color="inherit"
                size="large" 
                aria-label="menu" 
                sx={{ mr: 2 }}>
  
                 <MenuIcon  onClick={showSidebar} />
              
              </IconButton>
              <Typography variant="h5"  component="div" className={classes.title}>
                TOLLGATE MANAGEMENT SYSTEM
              </Typography>
              {auth && (
                <div className={classes.userItem}>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle  className={classes.icon}/>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Solomon</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
            <nav className={sidebar ? 'nav-menu-user active' : 'nav-menu-user'}>
              <ul className='nav-menu-items'  >
              
                {UserSidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
                
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
      );
}

export default SidebarUser;
