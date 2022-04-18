import React from 'react';
import { Switch, Route, Router } from 'wouter';
import { Notfound } from '../ui/Notfound';
import { NewDevice } from '../ui/devices/NewDevice';

export const DeviceRoutes = () => {
  return (
    <>
      <Router base="/device/">
        <Switch>
          <Route path="/new" component={NewDevice} />
          <Route path="/">device</Route>
          <Route component={Notfound} />
        </Switch>
      </Router>
    </>
  );
};
