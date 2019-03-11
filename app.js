const express = require("express"); //creates a new Express server
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require("body-parser");  //to parse json we sent to our frontend
const passport = require('passport');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({  //allows our app to respond to other software like postman
  extended: false
}));

app.use(bodyParser.json()); //allows our app to respond to json

//Passport to authenticate the web token
app.use(passport.initialize());   //adds middleware for Passport
require("./config/passport")(passport);

//app will listen for get requests
app.get("/", (req, res) => {
  //debugger
  const user = new User({
    handle: 'jim',
    email: 'jim@gmail.com',
    password: 'jimpassword'
  });
  user.save();  //now this user is in our MongoDB
  res.send("Hello World");
});

//tells express to use these routes
app.use("/api/users", users);
// app.use("/api/tweets", tweets);

//sets up middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//allows us to deploy to heroku later
//now we'll run on localhost:5000
const port = process.env.PORT || 5000;

//tells Express to start a socket and listen for connections on the path
app.listen(port, () => console.log(`Server is running on port ${port}`));

