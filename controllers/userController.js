const { User } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts', 'friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}