import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

import ldap from '/imports/ldap';

Meteor.startup(async () => {
  await ldap.clientBind();
  console.log(await ldap.authenticate('Administrator', 'admin'));
});
