import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, useLocation } from 'wouter';
import '@ui5/webcomponents-icons/dist/home';
import { Bar, Button } from '@ui5/webcomponents-react';

export const HeaderBar = () => {
  const [location, setLocation] = useLocation();
  return (
    <Bar>
      <Button icon="home" slot="startContent" onClick={() => setLocation('/')}>
        Home
      </Button>
      <Button
        icon="home"
        slot="startContent"
        onClick={() => setLocation('/user/login')}
      >
        Login
      </Button>
      <Button
        icon="home"
        slot="startContent"
        onClick={() => setLocation('/user/register')}
      >
        Registrar
      </Button>
    </Bar>
  );
};
