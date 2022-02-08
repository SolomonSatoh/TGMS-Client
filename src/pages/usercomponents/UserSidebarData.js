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
    path: '/user/toll',
    icon: <IoIcons.IoMdListBox />,
    cName: 'nav-text'
  },
  {
    title: 'LOGOUT',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }

];
