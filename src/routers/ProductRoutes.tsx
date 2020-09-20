import React from 'react';
import Product from '../container/Product';
import { Route, Switch } from 'react-router-dom';
import routes from '../constants';

export default function ProductRoutes() {
  return (
    <Switch>
      <Route path={routes.PRODUCT} component={Product} />
    </Switch>
  );
}
