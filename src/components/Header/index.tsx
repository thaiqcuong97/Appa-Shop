import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants';

export default function Header() {
  return (
    <header>
      <Link to={routes.HOME} >Home</Link>
      <Link to={routes.PRODUCT}> product </Link>
    </header>
  );
}


