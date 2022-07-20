import { Meteor } from 'meteor/meteor';
import '/imports/AccountsConfig';
import '/imports/AccountsLdap/server';
/*
import { CollTickets } from '/imports/tickets/ticketsColl.js';
console.log(CollTickets);
*/

Meteor.publish('eventos', function (...args) {
  console.log(args)
})