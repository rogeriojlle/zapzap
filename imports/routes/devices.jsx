import React from 'react';
import { Switch, Route, Router } from 'wouter';
import { Notfound } from '../ui/Notfound';
import { NewDevice } from '../ui/devices/NewDevice';

export const DeviceRoutes = props => {
  switch (props.params.rest) {
    case 'new':
      return <NewDevice />;
    case undefined:
      return <>device</>;
    default:
      return <Notfound />;
  }
};