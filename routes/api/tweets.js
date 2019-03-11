// const express = require("express");
// const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');
// const Tweet = require('../../models/Tweet');
// const validateTweetInput = require('../../validation/tweets');

// router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));

// //to get all tweets
// router.get('/', (req, res) => {
//   Tweet.find()  //gets all
//     .sort({ date: -1 }) //newest first
//     .then(tweets => res.json(tweets))
//     .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
// });

// //to get a user's tweets
// router.get('/user/:user_id', (req, res) => {
//   Tweet.find({user: req.params.user_id})
//     .then(tweets => res.json(tweets))
//     .catch(err => 
//       res.status(404).json({ notweetsfound: 'No tweets found from that user'})
//     );
// });

// //to get a single tweet
// router.get('/:id', (req, res) => {
//   Tweet.findById(req.params.id)
//     .then(tweet => res.json(tweet))
//     .catch(err => 
//       res.status(404).json({ notweetfound: 'No tweet found with that ID'})
//     );
// });

// //protected route for a user to post tweets

// router.post('/',
//   passport.authenticate('jwt', { session: false }),   //to add user to the request, middleware func, takes strategy and config obj
//   (req, res) => {   //req obj will have user key(currUser) abse on json web token
//     const { errors, isValid } = validateTweetInput(req.body);   //destructure from 

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newTweet = new Tweet({
//       user: req.user.id,
//       text: req.body.text
//     });

//     newTweet.save().then(tweet => res.json(tweet));
//   }
// );

// module.exports = router;
