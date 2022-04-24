import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'wouter';
import { Hero } from './style';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Input } from '@ui5/webcomponents-react';
import { useLocation } from 'wouter';
import { loginUserWithLDAP } from '/imports/AccountsLdap/client';

export const Login = () => {
  const [_, setLocation] = useLocation();

  const { userId } = useTracker(() => {
    return {
      userId: Meteor.userId(),
    };
  }, []);

  const handleLogin = () => {
    const { formLogin } = document.forms;
    const { sAMAccountName, pw } = formLogin.elements;
    const valueAccount = sAMAccountName.value.trim();
    const valuePw = pw.value.trim();
    if (!valueAccount || !valuePw) {
      const error = new Meteor.Error(400, 'dados invalidos');
      console.error(error);
      return false;
    }
    loginUserWithLDAP(valueAccount, valuePw, (...args) => {
      console.log(args);
    });
    /*
    Meteor.loginWithPassword({ email: email.value }, password.value, err => {
      if (err) throw err;
      setLocation('/user/profile');
    });
    */
  };

  return userId ? (
    <Redirect to="/user/profile" />
  ) : (
    <>
      <Hero id="formLogin">
        <ui5-label for="sAMAccountName" required show-colon>
          email
        </ui5-label>
        <Input
          id="sAMAccountName"
          name="sAMAccountName"
          placeholder="sAMAccountName"
          type="Text"
          required
        />

        <ui5-label for="pw" required show-colon>
          senha
        </ui5-label>
        <ui5-input
          id="pw"
          name="pw"
          placeholder="********"
          type="Password"
          required
        ></ui5-input>
        <Button onClick={handleLogin}>Enviar</Button>
      </Hero>
    </>
  );
};
