import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Hero } from './style';

import { Input } from '@ui5/webcomponents-react';

export const Login = () => {
  console.log(Accounts);

  return Meteor.userId() ? (
    'Logado'
  ) : (
    <form>
      <Hero>
        <ui5-label
          class="samples-big-margin-right"
          for="myInput"
          required
          show-colon
        >
          Name
        </ui5-label>
        <Input id="myInput" placeholder="Enter your Name" required />

        <ui5-label for="myPassword" required show-colon>
          Secret Code
        </ui5-label>
        <ui5-input
          id="myPassword"
          type="Password"
          value-state="Error"
          placeholder="Enter your Secret Code"
          required
        ></ui5-input>
      </Hero>
    </form>
  );
};
