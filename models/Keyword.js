const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
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
=======
const KeywordSchema = new Schema ({
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
>>>>>>> 30159434dcf10e518794638038409cb818e399ad
