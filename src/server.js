"use strict";

const express = require("express");
const app = express();

const notFoundHandler = require('./handler/404')
const errorHandler = require('./handler/500')
const stamper = require('./middleware/stamper')


// ---------------------------- route's ---------------------
app.get("/", homeHandler);
app.get("/data", stamper , dataHandler);


// ---------------------------- handler's ---------------------

function homeHandler(req, res) {
  res.status(200).send("welcome to home page");
}

function dataHandler (req,res) {
    res.send ({
        id:1,
        name: 'Mohammad',
        time: req.timeStamp,
        
    })
}

// ---------------------------- listen ---------------------

app.use('*',notFoundHandler);
app.use(errorHandler);

// ---------------------------- listen ---------------------

function start(port) {
  app.listen(port, () => {
    console.log(`listen to port ${port}`)
  });
}


module.exports = {
    start: start,
    app: app
}