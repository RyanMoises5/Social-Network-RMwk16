const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usersData, thoughtsData } = require('./data.js')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connected');

  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
  
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  await User.collection.insertMany(usersData);
  await Thought.collection.insertMany(thoughtsData);

  console.table(usersData);
  console.table(thoughtsData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
