const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  bio: {
    type: String,
    required: true
  },
  file: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Portfolio = mongoose.model('portfolio', portfolioSchema);
