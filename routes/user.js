const express = require('express')
const router = express.Router()
const { login, register, update, deleteUser } = require('../controllers/user')

router.post('/login', login)
router.post('/register', register)
router.put('/:id', update)
router.delete('/:id', deleteUser)

module.exports = router
