const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//where we can add routes
router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));


//to register new users
router.post('/register', (req, res) => {
  const {errors, isValid} = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  //Check to ensure nobody has already registered w/ duplicate email
  User.findOne( {email: req.body.email } )
    .then(user => {
      if(user) {
        //use validations to send the error
        errors.email = 'Email already exists';
        //throws 400 error if the email already exists
        return res.status(400).json(errors);
      } else {
        //otherwise creates a new User
        const newUser = new User({
          email: req.body.email,
          password: req.body.password
        });
        
        // salt and hash our new user's pw b4 storing it in the db
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user.id, email: user.email };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              }) 
              .catch(err => console.log(err));
          });
        });
      }
    });
});

// to allow users to login
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne( {email} )
    .then(user => {
      if (!user) {
        //use validations to send the error
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password) //use bcrypt to check b/c pass has been hashed
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,    //from mongo
              email: user.email
            };

            jwt.sign(   //create jwt and send it to user in order to sign the user in on the frontend
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },  //tell key to expire in one hour
              (error, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
              );
              
            // res.json({ msg: 'Success' });

          } else {
            errors.password = 'Incorrect password';
            return res.status(400).json(errors);
          }
        });
    });
});

//creates our private auth route
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email
  });
});

module.exports = router;
