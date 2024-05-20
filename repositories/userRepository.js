const { UsersModel } = require('../models/user.model')

// get user by email
const getByEmail = async (email) => {
  return await UsersModel.query().findOne({email})
}

// add user
const createUser = async (email, password) => {
  return await UsersModel.query().insert({ user_type: "common", email, password })
}

// delete user
const deleteUser = async (id) => {
  return await UsersModel.query().where({id}).delete()
}

// update user
const updateUser = async (id, data) => {
  return await UsersModel.query().where({ id }).update(data)
}

module.exports = {
  getByEmail,
  createUser,
  updateUser,
  deleteUser
}