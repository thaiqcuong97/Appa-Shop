import React from 'react';

import './Header.scss';
import '../../assets/styles/general.scss';
import { SearchList } from '../../apis/Product';
import { TopBar, TopNav, TopBarContent } from './components'

function Header() {
  return (
    <header>
      <TopBar />
      <TopBarContent SearchList={SearchList} />
      <TopNav />
    </header>
  );
}

export default Header;

