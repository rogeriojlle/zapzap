import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { ThemeProvider } from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets';

Meteor.subscribe('eventos', function (/** @type {any} */ ...args) {
  console.log(args);
});

Meteor.startup(() => {
  render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('react-target')
  );
});
