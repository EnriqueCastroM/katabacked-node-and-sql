var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>res.send({ name: "Express with SQL"}));

/* GET health page. */
router.get('/health', (req, res, next) =>res.send({ status: "OK"}));


module.exports = router;
