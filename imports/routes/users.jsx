import React from 'react';
import { Switch, Route, Router, useLocation, useRoute } from 'wouter';
import { Login } from '../ui/Login';
import { Register } from '../ui/Register';
import { Notfound } from '../ui/Notfound';
import { Profile } from '../ui/Profile';

export const UserRoutes = props => {
  const [location, setLocation] = useLocation();
  const [route, setRoute] = useRoute();
  console.log({ location, route });
  switch (props.params.rest) {
    case 'login':
      return <Login />;
    case 'register':
      return <Register />;
    case 'profile':
      return <Profile />;
    default:
      return <Notfound />;
  }
};
