import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  

  {
    title: 'PROFILE',
    path: '/profile',
    icon: <FaIcons.FaUserCog />,
    cName: 'nav-text'
  },
  {
    title: 'TOLL DETAILS',
    path: '/tolls',
    icon: <FaIcons.FaCar />,
    cName: 'nav-text'
  },
  {
    title: 'ADD STAFF',
    path: '/adds',
    icon: <IoIcons.IoMdPersonAdd />,
    cName: 'nav-text'
  },
  {
    title: 'STAFF DETAILS',
    path: '/staff',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'USER DETAILS',
    path: '/customer',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'STATISTICTS',
    path: '/trans',
    icon: <IoIcons.IoMdStats />, 
    cName: 'nav-text'
  },
  {
    title: 'CAR DETAILS',
    path: '/entrys',
    icon: <FaIcons.FaCar />,
    cName: 'nav-text'
  },
  {
    title: 'LOGOUT',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }

];
