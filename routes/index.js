var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'inmed.id | Home Health Care On Demand' });
});

module.exports = router;
