var express = require('express');
var router = express.Router();

let msg = { haim: 'haim' , masha: 'masha'}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(msg)
});

module.exports = router;
