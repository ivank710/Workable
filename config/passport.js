const JwtStrategy = require('passport-jwt').Strategy; //to tell passport that we want to use Strategy for handling json web tokens
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();  //extract json token from header
options.secretOrKey = keys.secretOrKey;

//returns our payload
module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          //return user to the frontend
          return done(null, user);
        }
        //return false since there is no user
        return done(null, false);
      })
      .catch(err => console.log(err));
    
    // done(); //to ensure passport doesnt hang
  }));
};