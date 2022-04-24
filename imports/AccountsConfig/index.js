/*
Accounts.validateLoginAttempt(
  ({ allowed, connection, methodArguments, methodName, type }) => {
    console.log({ allowed, connection, methodArguments, methodName, type });
    return false;
    return type === 'ldap' && allowed === true;
  }
);
*/

Accounts.validateNewUser(user => {
  console.log(user);
  throw new Meteor.Error(403, 'porque eu nao quero');
});
