const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),

      // Getter method to format timestamp 
      get: (date) => {
        // Initial format: Tue Apr 30 2024 02:23:05 GMT-0400 (Eastern Daylight Time)
        let dateSplit = date.toString().split(" ")
        return `${dateSplit[1]} ${dateSplit[2]}, ${dateSplit[3]} at ${dateSplit[4]}`;
        // Output format: Apr 30, 2024 at 02:23:05
      }

    },
    username: {
      type: String,
      required: true
    },
    // When new reactions are added, they will be parsed through the reaction schema made in Reaction.js
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;