import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Product from '../container/Product';


export default function ProductRoutes({ routes }: any) {
  return (
    <Switch>
      <Route exact path={routes.PRODUCT} component={Product} />
    </Switch>
  );
}