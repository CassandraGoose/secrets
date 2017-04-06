const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res) => {
  console.log('fucking work');
})

router.post('/', (req, res) => {
  console.log(req.body.secret);
  knex('secret')
    .then(secrets => {
      console.log(secrets);
      res.json(secrets);
    })
})

module.exports = router
