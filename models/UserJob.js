const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserJobSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    company: {
        type: String,
        required: true
    },
    company_logo: {
        type: String,
        required: false
    },
    company_url: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

});

const UserJob = mongoose.model('userJobs', UserJobSchema);
module.exports = UserJob;
