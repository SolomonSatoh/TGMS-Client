import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {StaffSidebarData} from './StaffSidebarData'
import { IconContext } from 'react-icons';
import './StaffNavbar.css';

function SidebarStaff() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);
   
  
    return (
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
           
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items'>
                
                {StaffSidebarData.map((item, index) => {
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
        </>
      );

}

export default SidebarStaff;
