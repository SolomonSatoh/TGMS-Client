/* Importing the icons from the react-icons library. */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

/* Exporting the data to be used in the sidebar. */
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
