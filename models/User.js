const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    require: true
  },
  keywords: {
    type: Array,
    require: false
  }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;