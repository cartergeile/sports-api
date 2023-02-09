// import dependencies
const mongoose = require('mongoose')

// player is a subdoc NOT A MODEL
// player will be part of the team array added to specific teams

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  position: {
    type: String
  },
  condition: {
    type: String,
    enum: ['healthy', 'injured, but can play', 'injured and out'],
    default: 'healthy'
  },

}, { timestamps: true })

module.exports = playerSchema