import React from 'react';
import { Random } from 'meteor/random';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';
import { Redirect } from 'wouter';
import { Button, Input, FormGroup } from '@ui5/webcomponents-react';
import { CollDevices } from '../../../api/devices';

export const NewDevice = () => {
  const idDevice = Random.hexString(16);
  const iniciar = () => {
    Meteor.call('iniciarZap', (err, res) => {});
  };
  return (
    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column' }}>
      <Input />
      <Input />
      <Button icon="home" onClick={iniciar}>
        Iniciar
      </Button>
    </div>
  );
};
