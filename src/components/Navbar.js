import React, { useState } from 'react';
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

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  let history = useHistory();

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
            })}
            <li className='nav-text'>
              <Link to="/login-staff" className='nav-text'>
                <IoIcons.IoMdPeople />
                <span><p>STAFF</p></span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/login' className='nav-text'>
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
