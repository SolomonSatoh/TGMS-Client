import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const StaffSidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'USERS ENTRY',
    path: '/profile',
    icon: <FaIcons.FaPeopleCarry />,
    cName: 'nav-text'
  },
  
  {
    title: 'ALL ENTRIES',
    path: '/fair',
    icon: <IoIcons.IoMdAnalytics/>,
    cName: 'nav-text'
  },
  {
    title: 'ONLINE USERS',
    path: '/trans',
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
