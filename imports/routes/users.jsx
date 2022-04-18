import React from 'react';
import { Login } from '../ui/Login';
import { Register } from '../ui/Register';
import { Notfound } from '../ui/Notfound';
import { Profile } from '../ui/Profile';

export const UserRoutes = props => {
  switch (props.params.rest) {
    case 'login':
      return <Login />;
    case 'register':
      return <Register />;
    case 'profile':
      return <Profile />;
    case undefined:
      return <>user</>;
    default:
      return <Notfound />;
  }
};
