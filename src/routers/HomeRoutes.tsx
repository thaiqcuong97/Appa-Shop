import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../container/Home';
import routes from '../constants';

export default function HomeRoutes() {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
    </Switch>
  );
}
