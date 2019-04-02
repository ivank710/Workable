const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeywordSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  keywords: {
    type: Array,
    required: true
  },
});

const Keyword = mongoose.model('keywords', KeywordSchema);
module.exports = Keyword;