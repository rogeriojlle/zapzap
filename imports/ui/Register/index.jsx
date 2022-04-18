import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';
import { Redirect } from 'wouter';

import {
  Button,
  Input,
  Form,
  FormGroup,
  FormItem,
} from '@ui5/webcomponents-react';

import '@ui5/webcomponents-icons/dist/add-employee';

export const Register = () => {
  const { user, userId } = useTracker(() => {
    return {
      user: Meteor.user(),
      userId: Meteor.userId(),
    };
  }, []);

  const handleForm = evt => {
    const { email, password } = document.forms.formRegistrar.elements;
    console.log(Accounts);
    Accounts.createUser(
      {
        email: email.value,
        password: password.value,
      },
      err => {
        if (err) throw err;
      }
    );
  };

  return (
    <div style={{ margin: 'auto' }}>
      {userId ? (
        <Redirect to="/user/profile" />
      ) : (
        <Form id="formRegistrar">
          <FormGroup titleText="Registrar nova Conta:">
            <FormItem label="Email">
              <Input
                id="email"
                name="email"
                type="Email"
                placeholder="email"
                required
              />
            </FormItem>
            <FormItem label="Senha">
              <Input
                id="password"
                name="password"
                type="Password"
                placeholder="senha"
                required
              />
            </FormItem>
            <FormItem>
              <Button
                icon="add-employee"
                onClick={handleForm}
                tooltip="Enviar formulario"
              ></Button>
            </FormItem>
          </FormGroup>
        </Form>
      )}
    </div>
  );
};
