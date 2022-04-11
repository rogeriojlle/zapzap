import React from 'react';
import { Switch, Route } from 'wouter';
import { Login } from './Login';
import { Notfound } from './Notfound';

export const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route component={Notfound} />
  </Switch>
);
