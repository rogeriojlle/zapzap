import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const schemaTicket = new SimpleSchema({
  id: Number,
  titulo: String,
  descricao: {
    type: String,
    max: 200,
  },
});

const CollTickets = new Mongo.Collection('tickets');
CollTickets.attachSchema(schemaTicket);

export { CollTickets };
