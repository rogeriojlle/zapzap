import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'wouter';
import { Hero } from './style';
import { useTracker } from 'meteor/react-meteor-data';

import { Button, Input } from '@ui5/webcomponents-react';
import { useLocation } from 'wouter';

export const Login = () => {
  const [location, setLocation] = useLocation();

  const { userId } = useTracker(() => {
    return {
      userId: Meteor.userId(),
    };
  }, []);

  const handleLogin = () => {
    const { formLogin } = document.forms;
    const { email, password } = formLogin.elements;
    Meteor.loginWithPassword({ email: email.value }, password.value, err => {
      if (err) throw err;
      setLocation('/user/profile');
    });
  };

  return userId ? (
    <Redirect to="/user/profile" />
  ) : (
    <>
      <Hero id="formLogin">
        <ui5-label for="email" required show-colon>
          email
        </ui5-label>
        <Input
          id="email"
          name="email"
          placeholder="email"
          type="Email"
          required
        />

        <ui5-label for="password" required show-colon>
          senha
        </ui5-label>
        <ui5-input
          id="password"
          name="password"
          placeholder="********"
          required
        ></ui5-input>
        <Button onClick={handleLogin}>Enviar</Button>
      </Hero>
    </>
  );
};
