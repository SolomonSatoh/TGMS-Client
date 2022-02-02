import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const StaffSidebarData = [
 
  {
    title: 'USERS ENTRY',
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
  {
    title: 'TOLLGATE CUSTOMERS',
    path: '/staff/online',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'LOGOUT',
    path: '/staffdetails',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }

];
