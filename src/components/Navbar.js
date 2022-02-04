import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);



  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar  position="static" >
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
            <Typography variant="h5" color="inherit" component="div" >
              TOLLGATE MANAGEMENT SYSTEM
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
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

export default Navbar;
