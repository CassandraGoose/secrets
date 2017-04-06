const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res) => {
  console.log('fucking work');
})

router.post('/', (req, res) => {
  var theSecret = {
    text: req.body.text
  }
  knex('secret')
    .insert(theSecret)
    .then(secrets => {
      console.log(secrets);
      res.json(secrets);
    })
})

module.exports = router
