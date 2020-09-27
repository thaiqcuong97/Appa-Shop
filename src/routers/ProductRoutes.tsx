import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Product from '../container/Product';
import routes from '../constants';

export default function ProductRoutes() {
  return (
    <Switch>
      <Route exact path={routes.PRODUCT} component={Product} />
    </Switch>
  );
}