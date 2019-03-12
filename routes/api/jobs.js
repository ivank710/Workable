const express = require("express");
const router = express.Router();
const request = require('request');
const axios = require('axios')




const https = require("https");
const url = "https://jobs.github.com/positions.json?description=python&location=new+york";



router.get('/findjob', (req, res) => {
    

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
                // console.log(body[1].title);
                // console.log(body[1].url);
                // console.log(body[1].company_url);
                
            });
        });
    

})

   

   


module.exports = router;