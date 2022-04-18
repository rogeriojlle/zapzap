import React from 'react';
import { HeaderBar } from './Header';
import { AppRoutes } from '../routes/main';

export const App = () => (
  <div
    className="ui5-content-density-compact"
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <HeaderBar />
    <AppRoutes
      style={{
        flex: 1,
      }}
    />
  </div>
);
