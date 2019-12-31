var express = require('express');
var router = express.Router();
// var updateFileModule = require('../modules/updateFile');

var conection = require('../models/db');

var clientModel = require('../models/user.model');

/* GET home page. */




router.get('/', function(req, res, next) {
    clientModel.find({}, (err, data) => {
      if(err){
        console.log('err from find');
        console.log(err)
      }
      else{
        res.send(data)
      }
    } )

});

module.exports = router; 
