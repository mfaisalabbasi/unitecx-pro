const mongoose = require('mongoose');

const servcieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  file: {
    type: String
  },
  bio: {
    type: String,
    required: true
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

module.exports = Service = mongoose.model('service', servcieSchema);
