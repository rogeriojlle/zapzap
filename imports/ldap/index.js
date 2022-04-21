import ldap from 'ldapjs';

const client = ldap.createClient({
  url: ['ldaps://sandbox.local'],
  tlsOptions: {
    rejectUnauthorized: false,
  },
});

client.on('error', err => {
  console.log('err', err);
});

client.on('connect', () => {
  console.log('connect');
});

client.bind(
  'CN=meteor app,OU=ApplicationsUsers,DC=sandbox,DC=local',
  'meteor',
  err => {
    if (err) throw err;

    client.search(
      'DC=sandbox,DC=local',
      {
        filter: '(sAMAccountName=Administrator)',
        scope: 'sub',
      },
      (err, res) => {
        if (err) throw err;
        res.on('searchEntry', entry => {
          console.log(entry);
        });
      }
    );
  }
);

client.on('data', data => {
  console.log('data', JSON.parse(data));
});
