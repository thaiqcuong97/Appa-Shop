import React from 'react';

import './Header.scss';
import '../../assets/styles/general.scss';

import { searchList } from '../../constants';

import { TopBar, NavBar, TopBarContent } from './components'


function Header() {

  return (
    <header>
      <TopBar />
      <TopBarContent searchList={searchList} />
      <NavBar />
    </header>
  );
}

export default Header;

