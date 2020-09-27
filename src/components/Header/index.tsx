import React from 'react';

import './Header.scss';
import '../../assets/styles/general.scss';
import { SearchList } from '../../apis/Product';

import routes from '../../constants';

import { TopBar, NavBar, TopBarContent } from './components'

function Header() {
  return (
    <header>
      <TopBar />
      <TopBarContent SearchList={SearchList} />
      <NavBar routes={routes} />
    </header>
  );
}

export default Header;

