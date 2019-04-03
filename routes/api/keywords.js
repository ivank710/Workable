const express = require("express");
const router = express.Router();
const passport = require('passport');

const path = require("path");
const pdf = require("pdf-parse");
const fs = require("fs");
const http = require('http');

const Keyword = require('../../models/Keyword');

<<<<<<< HEAD
//Look up keywords
=======
//? Look up keywords
>>>>>>> 30159434dcf10e518794638038409cb818e399ad
router.get('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Keyword.find({
<<<<<<< HEAD
    user: req.user.id
  })
=======
      user: req.user.id
    })
>>>>>>> 30159434dcf10e518794638038409cb818e399ad
    .then(keyWord => res.json(keyWord))
    .catch(err => res.status(404).json({
      error: 'No keywords found'
    }));
});

<<<<<<< HEAD
//Save keywords
router.post('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const keyword = new Keyword({
    keywords: req.body.keywords,
    user: req.user.id
  });

  keyword.save().then(key => res.json(key)).catch(error => res.status(422).json({
    uniqueness: 'Keyword is saved already'
  }));
});
=======
>>>>>>> 30159434dcf10e518794638038409cb818e399ad

// Handle Uploaded File
var multer = require('multer');
var cors = require('cors');
router.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({
  storage: storage
});

<<<<<<< HEAD
router.post('/file-upload', upload.single('myFile'), (req, res, next) => {
  const file = req.file;
  console.log(file);

=======
router.post('/file-upload', upload.single('file'), (req, res, next) => {
  const file = req.file;
  // console.log(req.body.user);
  let userId = JSON.stringify(req.body.user);
  
>>>>>>> 30159434dcf10e518794638038409cb818e399ad
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }

<<<<<<< HEAD
  //Reads any file that's uploaded and saved
  let dataBuffer = fs.readFileSync(`uploads/${file.originalname}`);

  pdf(dataBuffer).then(function (data) {
    let keys = [];
    let resWords = data.text.toLowerCase().split(' ');
    // use data
    fs.readFile('KeywordsText.text', 'utf-8', (err, keyText) => {
      let result = [];
      if (err) throw err;

      //Array of all words in KeywordsText
      keys = keyText.toLowerCase().split('\n');
      for (let i = 0; i < resWords.length; i++) {
        if (keys.includes(resWords[i])) {
          if (!result.includes(resWords[i]))
            result.push(resWords[i]);
        }
      }
      console.log(req.user);
      const keyword = new Keyword({
        keywords: [1, 2, 4],
        // user: req.user.id
      });

      keyword.save().then(key => res.json(key)).catch(error => res.status(422).json({
        uniqueness: 'Keyword is saved already'
      }));

      res.send(result);
    });

  })
    .catch(function (error) {
      // handle exceptions
    });

  //Save Keyword to Database
// }).then((req, res) => {
//   const keyword = new Keyword({
//     keywords: req.body.keywords,
//     user: req.user.id
//   });
//   keyword.save().then(key => res.json(key)).catch(error => res.status(422).json({
//     uniqueness: 'Keyword is saved already'
//   }));
});

//! CHAIN .then to make another API call with keywords (res)?

module.exports = router;
=======
  //Reads any file that's uploaded and saves it 
  let dataBuffer = fs.readFileSync(`uploads/${file.originalname}`);

  pdf(dataBuffer).then(function (data) {
      let keys = [];
      let resWords = data.text.toLowerCase().split(' ');
      // use data
      fs.readFile('KeywordsText.text', 'utf-8', (err, keyText) => {
        let result = [];
        if (err) throw err;

        //Array of all words in KeywordsText
        keys = keyText.toLowerCase().split('\n');
        for (let i = 0; i < resWords.length; i++) {
          if (keys.includes(resWords[i])) {
            if (!result.includes(resWords[i]))
              result.push(resWords[i]);
          }
        }

        //Save keyword to database with associated user 
        const keyword = new Keyword({
          keywords: result,
          user: JSON.parse(userId)
        });
      
        keyword.save();

        console.log(result);
        res.send(result);
      });

    })
    .catch(function (error) {
      // handle exceptions
    });
});

// Chain .then to make another API call with keywords?

module.exports = router;
>>>>>>> 30159434dcf10e518794638038409cb818e399ad
