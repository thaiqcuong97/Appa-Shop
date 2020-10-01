import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../container/Home';




export default function HomeRoutes({ routes }: any) {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
    </Switch>
  );
}
