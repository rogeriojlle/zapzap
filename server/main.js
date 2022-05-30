import { Meteor } from 'meteor/meteor';
import '/imports/AccountsConfig';
import '/imports/AccountsLdap/server';
import { Client, LocalAuth } from 'whatsapp-web.js';
import QRCode from 'qrcode';

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: 'client-one',
  }),
  puppeteer: { headless: true },
});

client.on('qr', async qr => {
  console.log(await QRCode.toString(qr));
});

client.on('ready', () => {
  console.log('Client is ready!');
  console.log(client);
});

client.on('change_state', state => {
  console.log('change_state', state);
});

client.initialize();

Meteor.startup(() => {});
