const express = require("express");
const router = express.Router();
const passport = require('passport');

const path = require("path");
const pdf = require("pdf-parse");
const fs = require("fs");
const http = require('http');

const Keyword = require('../../models/Keyword');

//Look up keywords
router.get('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Keyword.find({
    user: req.user.id
  })
    .then(keyWord => res.json(keyWord))
    .catch(err => res.status(404).json({
      error: 'No keywords found'
    }));
});

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

router.post('/file-upload', upload.single('myFile'), (req, res, next) => {
  const file = req.file;
  console.log(file);

  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }

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
