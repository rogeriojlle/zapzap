import React from 'react';
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
import { Section } from './style';

export const Profile = () => {
  const { user, userId } = useTracker(() => {
    return {
      user: Meteor.user(),
      userId: Meteor.userId(),
    };
  }, []);

  const logout = evt => Meteor.logout();
  if (userId)
    return (
      <Section>
        <pre>{JSON.stringify(user, 'null', 2)}</pre>
        <Button onClick={logout}>Sair</Button>
      </Section>
    );

  return <Redirect to="/user/login" />;
};
