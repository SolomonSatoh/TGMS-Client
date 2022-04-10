import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

//This component creates reusable routes for admin panel
export const AdminSidebarData = [
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


];
