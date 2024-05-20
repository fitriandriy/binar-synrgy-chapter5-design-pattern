const express = require("express")
const router = express.Router()
const user = require('./user')

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/home', (req, res) => {
  res.render('homepage');
});

router.use('/user', user)

module.exports = router