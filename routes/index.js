var express = require('express');
var router = express.Router();

var Word = require("../mongodb");

/* GET home page. */
router.get('/', async function(req, res, next) {

  let words = await Word.find();
  console.log(words);

  res.render('index', { title: 'Words', words: words });
});

module.exports = router; 
