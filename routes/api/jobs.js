const express = require("express");
const router = express.Router();
const request = require('request');
const axios = require('axios');




const https = require("https");



// router.get('/:location', (req, res) => {
//     let location = req.params.location;
//     let url = `https://jobs.github.com/positions.json?location=${location}`;

//         https.get(url, jobs => {
//             jobs.setEncoding("utf8");
//             let body = "";
//             jobs.on("data", data => {
//                 body += data;
//             });
//             jobs.on("end", () => {
//                 body = JSON.parse(body);
//                 res.send(body)
//                 // console.log(body);
                
//             });
//         });
    

// })


router.get('/:location/:keywords', (req, res) => {
    let location = req.params.location;
    let keywords = req.params.keywords;
    if (keywords === 'empty') {
        keywords='';
    }
    // let keywords = req.body.data.keywords.join('+');
    let url = `https://jobs.github.com/positions.json?location=${location}&description=${keywords}`;

    https.get(url, jobs => {
        jobs.setEncoding("utf8");
        let body = "";
        jobs.on("data", data => {
            body += data;
        });
        jobs.on("end", () => {
            body = JSON.parse(body);
            res.send(body)
            // console.log(body);

        });
    });


})

router.get('/', (req, res) => {
    let url = `https://jobs.github.com/positions.json?location=`;

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


})

   

   


module.exports = router;