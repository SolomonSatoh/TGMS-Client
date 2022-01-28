import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const UserSidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'TOLL DETAILS',
    path: '/tolldetails',
    icon: <IoIcons.IoMdListBox />,
    cName: 'nav-text'
  },
  
  {
    title: 'SEARCH TOLL',
    path: '/search',
    icon: <IoIcons.IoMdSearch/>,
    cName: 'nav-text'
  },
  
  {
    title: 'LOGOUT',
    path: '/staffdetails',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }

];
