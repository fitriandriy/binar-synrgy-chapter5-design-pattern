const { getByEmail, createUser, updateUser, deleteUser } = require('../repositories/userRepository')

const getUserByEmail = async (params) => {
  const user = await getByEmail(params)

  return user;
}

const createUserService = async (email, password) => {
  const user = await createUser(email, password)

  return user;
}

const updateUserService = async (id, data) => {
  const user = await updateUser(id, data)

  return user;
}

const deleteUserService = async (id) => {
  const user = await deleteUser(id)

  return user;
}

module.exports = {
  getUserByEmail,
  createUserService,
  updateUserService,
  deleteUserService
}