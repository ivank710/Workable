const express = require("express");
const router = express.Router();
const passport = require('passport');

const UserJob = require('../../models/UserJob');

router.get('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    UserJob.find({user: req.user.id})
        .then(userJobs => res.json(userJobs))
        .catch(err => res.status(404).json({error: 'No jobs found'}));
});

router.post('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const newJob = new UserJob({
        company: req.body.company,
        company_logo: req.body.company_logo,
        company_url: req.body.company_url,
        description: req.body.description,
        location: req.body.location,
        title: req.body.location,
        type: req.body.title,
        url: req.body.url
    });

    newJob.save().then( job => res.json(job)).catch(error => res.status(422).json({uniqueness: 'This job is saved already!'}))
});

router.delete('/:userjobid', passport.authenticate('jwt', {session: false}), (req, res) => {
    const jobid = req.params.userjobid;
    UserJob.findOneAndRemove({jobid}).then(() => res.json({success: true}));
});

module.exports = router;