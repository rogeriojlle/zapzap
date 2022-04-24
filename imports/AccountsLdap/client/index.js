import { Accounts } from 'meteor/accounts-base';

export const loginUserWithLDAP = (sAMAccountName, pw, userCallback) => {
  const loginRequest = {
    ldap: true,
    sAMAccountName,
    pw,
  };

  Accounts.callLoginMethod({
    methodArguments: [loginRequest],
    userCallback,
  });
};
