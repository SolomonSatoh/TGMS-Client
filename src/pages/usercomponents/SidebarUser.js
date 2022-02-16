import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {UserSidebarData} from './UserSidebarData'
import { IconContext } from 'react-icons';
import './UserNavbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import * as IoIcons from 'react-icons/io';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, Redirect } from 'react-router-dom';



function SidebarUser() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    let history = useHistory();
   
  
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
                <li className='nav-text' >
                <Link to='/' className='nav-text'>
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

export default SidebarUser;
