import React from 'react';
import { Switch, Route, Router } from 'wouter';
import { Notfound } from '../ui/Notfound';
import { DeviceRoutes } from './devices';
import { UserRoutes } from './users';

export const AppRoutes = args => {
  return (
    <Router>
      <Switch>
        <Route path="/user/:rest*" component={UserRoutes} />
        <Route path="/device/:rest*" component={DeviceRoutes} />
        <Route path="/">main</Route>
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
};
