import React from 'react';


import './Header.scss';
import '../../assets/styles/general.scss';
import { TopBar, TopNav } from './components'

function Header() {
  return (
    <header>
      <TopBar />
      <TopNav />
    </header>
  );
}

export default Header;

