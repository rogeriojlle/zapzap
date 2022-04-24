import ldap from 'ldapjs';
import { Meteor } from 'meteor/meteor';

const { url, scriptAuthData, baseDN } =
  Meteor.settings.packages['service-configuration'].ldap;

let scriptClient = false;

export const init = async () => {
  if (!scriptClient) scriptClient = await clientBind();
  return scriptClient;
};

const createClient = () => {
  const client = ldap.createClient({
    url,
    tlsOptions: {
      rejectUnauthorized: false,
    },
  });

  client.on('error', err => {
    console.log('erro em createClient, saindo:');
    throw err;
  });

  return client;
};

const clientBind = ({ dn, pw } = scriptAuthData, client = createClient()) => {
  return new Promise((resolve, reject) => {
    client.bind(dn, pw, err => (err ? reject(err) : resolve(client)));
  });
};

const searchUser = sAMAccountName => {
  return new Promise((resolve, reject) => {
    if (!scriptClient) return reject('script não está pronto');
    let result = false;

    scriptClient.search(
      baseDN,
      {
        filter: `(sAMAccountName=${sAMAccountName})`,
        scope: 'sub',
        paged: false,
      },
      (err, res) => {
        if (err) return reject(err);
        res.on('searchEntry', entry => {
          if (!result) result = entry.object;
        });
        res.on('end', () => resolve(result));
      }
    );
  });
};

export const checkLogin = async (sAMAccountName, pw) => {
  let result = false;
  const user = await searchUser(sAMAccountName);
  if (user) {
    const loginClient = createClient();
    try {
      const loginBind = await clientBind(
        { dn: user.distinguishedName, pw },
        loginClient
      );
      result = user;
    } catch ({ code, name, message }) {
      result = new Meteor.Error(code, name, message);
    }
  }
  return result;
};
