import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../constants';

function TopNav() {
  return (
    <nav>
      <Link to={routes.HOME} >Home</Link>
      <Link to={routes.PRODUCT}> product </Link>
    </nav>
  );
}

export default TopNav;

