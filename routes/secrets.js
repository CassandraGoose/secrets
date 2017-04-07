const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res) => {
  console.log('fucking work');
  res.status(200).json({
    hello: 'what the fuck'
  })
})

router.post('/', (req, res) => {
  console.log(req.body.text)
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
