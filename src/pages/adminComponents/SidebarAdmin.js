
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AdminSidebarData} from './AdminSidebarData'
import { IconContext } from 'react-icons';
import './AdminNavbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import * as IoIcons from 'react-icons/io';
import MenuIcon from '@material-ui/icons/Menu';


function SidebarAdmin() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
   
  return (
    <div>
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
                  <Typography variant="h5"  component="div" >
                    TOLLGATE MANAGEMENT SYSTEM
                  </Typography>
                </Toolbar>
              </AppBar>
          </Box>
          <nav className={sidebar ? 'nav-menu-admin active' : 'nav-menu-admin'}>
          <ul className='nav-menu-items' >
            
            {AdminSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='nav-text'>
            <Link to="/" className='nav-text'>
              <IoIcons.IoIosLogOut />
              <span><p>LOGOUT</p></span>
            </Link>
          </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default SidebarAdmin;

