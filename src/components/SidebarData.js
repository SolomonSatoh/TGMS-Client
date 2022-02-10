import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'ADMIN',
    path: '/admin',
    icon: <FaIcons.FaUserCog />,
    cName: 'nav-text',
  },
  
  {
    title: 'STAFFS',
    path: '/staff',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'USERS',
    path: '/users',
    icon: <FaIcons.FaUserAlt />,
    cName: 'nav-text'
  },
 
];
