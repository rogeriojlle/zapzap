import { Accounts } from 'meteor/accounts-base';
import { init, checkLogin } from '/imports/ldap';
import { Meteor } from 'meteor/meteor';

await init();

Meteor.methods({
  checkLogin: async function ({ sAMAccountName, pw }) {
    return await checkLogin(sAMAccountName, pw);
  },
});

Accounts.registerLoginHandler('ldap', function ({ ldap, sAMAccountName, pw }) {
  if (ldap !== true) {
    throw new Meteor.Error(405, 'Method Not Allowed');
  }

  this.connection.onClose((...args) => {
    console.log('onClose', args);
  });

  const user = Meteor.call('checkLogin', { sAMAccountName, pw });

  return user ? { userId: user.sAMAccountName } : { error: 'falha' };
});
