const { Thought } = require('../models');

module.exports = {
  // Get all users
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().select('-__v').populate('reactions');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .populate('reactions')

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create thought
  async createThought(req,res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}