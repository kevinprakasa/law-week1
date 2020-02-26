var express = require("express");
var router = express.Router();
var rp = require("request-promise");

var options = {
  uri: "https://jobs.github.com/positions.json?location=new+york",
  json: true // Automatically parses the JSON string in the response
};

router.get("/", function(req, res, next) {
  rp(options)
    .then(function(jobs) {
      console.log("User has %d jobs", jobs.length);
      res.render("index", {
        title: "LAW Kevin Prakasa, Week 1",
        jobs: jobs
      });
    })
    .catch(function(err) {
      res.render("index", { title: "Error" });
      // API call failed...
    }); /* GET home page. */
});

router.get("/multiply", function(req, res, next) {
  const first = req.query.first;
  const second = req.query.second;
  res.send({ result: first * second });
});

module.exports = router;
