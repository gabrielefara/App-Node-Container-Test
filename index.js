const http = require('http');
const express = require("express")
const app = express();


var bodyParser = require('body-parser');
const { response } = require('express');

// support parsing of application/json type post data
app.use(bodyParser.text());
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {   

    console.log(req.body)
    console.log(req.rawHeaders)
    console.log(req.headers)
    res.send("OK")

})
 app.listen(5000, ()=> {

     console.log(`Start Server on Port ${5000}`);
 });