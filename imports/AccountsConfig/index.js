Accounts.validateLoginAttempt(
  ({ allowed, connection, methodArguments, methodName, type }) => {
    if (type !== 'ldap') return false;
    return false;
  }
);

Accounts.validateNewUser(user => {
  console.log(user);
  throw new Meteor.Error(403, 'porque eu nao quero');
});
