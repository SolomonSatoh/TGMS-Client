import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

//This component creates reusable routes for staff panel
export const StaffSidebarData = [
  {
    title: 'USER ENTRY',
    path: '/staff/user',
    icon: <FaIcons.FaPeopleCarry />,
    cName: 'nav-text'
  },
  {
    title: 'ALL ENTRIES',
    path: '/staff/entry',
    icon: <IoIcons.IoMdAnalytics/>,
    cName: 'nav-text'
  },
  

];
