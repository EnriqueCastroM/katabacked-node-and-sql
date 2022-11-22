const express = require('express');
const { route } = require('../app');
const router = express.Router();
const package = require('../package.json')
const time = Date.now();
const now = new Date(time);
/* GET home page. */
router.get('/', (req, res, next) =>res.send({ name: package.name, date: now.toString()}));

//Url con parametros
router.get("/users/:name/:id", (req, res, next) =>{
res.send({name : req.params.name, id: req.params.id});
});

//Url con query string 
router.get("/list", (req, res, next) =>{
  let numbers = [1, 11 , 666, 777, 888, 999, 423];
  res.send({number : req.query.sort ? numbers.sort() : numbers});
});

module.exports = router;
