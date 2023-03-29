var express = require('express');
var router = express.Router();
var x = Math.random();

var val1="Math.acosh(x) of value "+ x + " is "+ Math.acosh(x) 
var val2="Math.log1p(x) of value "+ x +" is "+ Math.log1p(x)
var val3= "Math.tan(x) of value "+ x + " is "+ Math.tan(x)
var val4= "Math.sqrt(x) of value "+ x + " is "+ Math.sqrt(x)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Supreeth ',value1: val1, value2:val2, value3:val3, value4: val4 });
});

module.exports = router;