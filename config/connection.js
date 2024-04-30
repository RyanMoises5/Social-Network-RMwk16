const connection = require('../config/connection');
const { Reaction, Thought, User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  // seed data function here
});
