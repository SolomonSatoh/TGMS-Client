import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  {
    title: 'HOME',
    path: '/admin-home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'PROFILE',
    path: '/admin/profile',
    icon: <FaIcons.FaUserCog />,
    cName: 'nav-text'
  },
  {
    title: 'TOLL DETAILS',
    path: '/admin/tolls',
    icon: <FaIcons.FaCar />,
    cName: 'nav-text'
  },
  {
    title: 'ADD STAFF',
    path: '/admin/adds',
    icon: <IoIcons.IoMdPersonAdd />,
    cName: 'nav-text'
  },
  {
    title: 'STAFF DETAILS',
    path: '/admin/staff',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'USER ENTRY',
    path: '/admin/customer',
    icon: <IoIcons.IoMdAnalytics />,
    cName: 'nav-text'
  },
  {
    title: 'STATISTICTS',
    path: '/admin/trans',
    icon: <IoIcons.IoMdStats />, 
    cName: 'nav-text'
  },
  {
    title: 'CAR DETAILS',
    path: '/admin/entrys',
    icon: <FaIcons.FaCar />,
    cName: 'nav-text'
  },
  {
    title: 'LOGOUT',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }

];
