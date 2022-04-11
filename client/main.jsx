import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Routes } from '/imports/ui/Routes';
import { ThemeProvider } from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets';

Meteor.startup(() => {
  render(
    <ThemeProvider>
      <Routes />
    </ThemeProvider>,
    document.getElementById('react-target')
  );
});
