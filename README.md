# Workable

[Workable-Live Site](https://workable-jobs.herokuapp.com)

Workable is a personalized job searching app designed to provide users relevant listings based on their resume. Users have the option of filtering job results based on city once they login. However, the main feature of this app is allowing users to upload their resume and providing relevant search results by making API calls based on keywords found in their resume.

<img width="1658" alt="Screen Shot 2019-06-08 at 1 56 09 PM" src="https://user-images.githubusercontent.com/42259148/59152248-39ba1500-89f5-11e9-8a9f-f16cd8ad0e86.png">

## Technologies Used
* Javascript
* React/Redux
* Node
* MongoDB
* Express


## Highlighted Features 

### Search Functionality 

<img width="1677" alt="Screen Shot 2019-06-08 at 1 53 17 PM" src="https://user-images.githubusercontent.com/42259148/59152263-653cff80-89f5-11e9-803e-7ce8caa65214.png">


One key functionality for this app was for users to select a specific location while looking for jobs. The goal was to use an external api to pull data based on the users input. In order to implement this, we created a thunk action creator that uses an API call to our backend route which will make the external API call based on the given parameters. 

API call to the backend.
```
export const getJobs = (location) => {
    
    return axios({
        url: `/api/jobs/${location}`,
        method: 'get',
        
    });
};

```
Backend route that fetches data
```

router.get('/:location', (req, res) => {
    let location = req.params.location;
    let url = `https://jobs.github.com/positions.json?location=${location}`;

        https.get(url, jobs => {
            jobs.setEncoding("utf8");
            let body = "";
            jobs.on("data", data => {
                body += data;
            });
            jobs.on("end", () => {
                body = JSON.parse(body);
                res.send(body) 
            });
        });
});

```

### Resume Keyword Parser

Handles the resume and parses it for keywords that match our set of keywords
```

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
    //handle exceptions
   });
});

```

