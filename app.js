const express = require("express"); //creates a new Express server
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require("body-parser");  //to parse json we sent to our frontend
const passport = require('passport');
const jobs = require('./routes/api/jobs');
const userJobs = require('./routes/api/userJobs');
const path = require("path");
const pdf = require("pdf-parse");
const fs = require("fs");
const http = require('http');

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

<<<<<<< HEAD
//app will listen for get requests
app.get("/", (req, res) => {
  //debugger
  // const user = new User({
  //   handle: 'jim',
  //   email: 'jim@gmail.com',
  //   password: 'jimpassword'
  // });
  // user.save();  //now this user is in our MongoDB
  res.send("Hello World");
});
=======

>>>>>>> 3811cabc894455722f29806a47bbff66a22bd001

//tells express to use these routes
app.use("/api/users", users);
app.use("/api/jobs", jobs);
app.use("/api/userJobs", userJobs);


//sets up middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());






//HANDLE UPLOADED FILE
var multer = require('multer');
var cors = require('cors');
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });
app.post('/file-upload', upload.single('myFile'), (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }

   //Reads any file that's uploaded and saved
  let dataBuffer = fs.readFileSync(`uploads/${file.originalname}`);
  pdf(dataBuffer).then(function (data) {
    let keywords = [];
    let resWords = data.text.toLowerCase().split(' ');
    // use data
    fs.readFile('KeywordsText.text', 'utf-8', (err, keyText) => { 
      let result = [];
      if (err) throw err; 
      
      //Array of all words in KeywordsText
      keywords = keyText.toLowerCase().split('\n');
      for (let i = 0; i < resWords.length; i++)
      {
      if (keywords.includes(resWords[i])) {
        if (!result.includes(resWords[i]))
        result.push(resWords[i]);
      }
    }
    res.send(result);
    });
     
  })
    .catch(function (error) {
      // handle exceptions
    });

  //Sends response back to frontend
  // res.send(file);
});




//allows us to deploy to heroku later
//now we'll run on localhost:5000
const port = process.env.PORT || 5000;

//tells Express to start a socket and listen for connections on the path
app.listen(port, () => console.log(`Server is running on port ${port}`));

