import { Accounts } from 'meteor/accounts-base';
import { init, checkLogin } from '/imports/ldap';
import { Meteor } from 'meteor/meteor';
const Future = require('fibers/future');

await init();

Meteor.methods({
  async checkLogin({ sAMAccountName, pw }) {
    console.log(this);
    return await checkLogin(sAMAccountName, pw);
  },
  creatuser({ email, password }) {
    console.log(Accounts);
    return true;
  },
});

Accounts.registerLoginHandler('ldap', function ({ ldap, sAMAccountName, pw }) {
  if (ldap !== true) {
    throw new Meteor.Error(405, 'Method Not Allowed');
  }

  const future = new Future();

  checkLogin(sAMAccountName, pw).then(
    res => future.return(res),
    err => future.return(err)
  );

  const user = future.wait();

  if (!user) return { error: new Meteor.Error('não encontrado') };

  var stampedToken = Accounts._generateStampedLoginToken();
  var hashStampedToken = Accounts._hashStampedToken(stampedToken);

  Meteor.users.upsert(user.sAMAccountName, {
    $set: {
      'services.resume.loginTokens': [hashStampedToken],
      'profile': {
        displayName: user.displayName,
      },
    },
  });

  console.log(user);

  return {
    userId: user.sAMAccountName,
    token: stampedToken.token,
  };
});
