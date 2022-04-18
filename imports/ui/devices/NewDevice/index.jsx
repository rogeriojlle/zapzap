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
import { CollDevices } from '../../../api/devices';

export const NewDevice = () => {
  return (
    <Form>
      <FormGroup>
        <FormItem></FormItem>
        <FormItem></FormItem>
        <FormItem></FormItem>
      </FormGroup>
    </Form>
  );
};
