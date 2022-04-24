import React from 'react';
import { Switch, Route } from 'wouter';
import { Notfound } from '../ui/Notfound';
import { DeviceRoutes } from './devices';
import { UserRoutes } from './users';

export const AppRoutes = args => {
  return (
    <Switch>
      <Route path="/user/:rest*" component={UserRoutes} />
      <Route path="/device/:rest*" component={DeviceRoutes} />
      <Route path="/">main</Route>
      <Route component={Notfound} />
    </Switch>
  );
};
