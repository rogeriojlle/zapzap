import ldap from 'ldapjs';
import { Meteor } from 'meteor/meteor';

const { url, bind, base } = Meteor.settings.ldap;

const client = ldap.createClient({
  url,
  tlsOptions: {
    rejectUnauthorized: false,
  },
});

client.on('error', err => {
  console.log('err', err);
});

export const clientBind = (authData = bind) => {
  return new Promise((resolve, reject) => {
    client.bind(...authData, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

export const authenticate = async (sAMAccountName, pwd) => {
  const auth = await searchUser(sAMAccountName);
  if (auth) {
    const authBind = await clientBind([auth.distinguishedName, pwd]);
    authBind.unbind();
    return authBind;
  }
};

export const searchUser = sAMAccountName => {
  return new Promise((resolve, reject) => {
    client.search(
      base,
      {
        filter: `(sAMAccountName=${sAMAccountName})`,
        scope: 'sub',
        paged: false,
      },
      (err, res) => {
        if (err) return reject(err);
        res.on('searchEntry', entry => resolve(entry.object));
        res.on('end', result => resolve(result.object));
      }
    );
  });
};
