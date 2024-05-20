const { getUserByEmail, createUserService, updateUserService, deleteUserService } = require('../service/userService')

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await getUserByEmail(email)

    if (user) {
      if (user.password === password) {
        return res.status(200).json({
          status: true,
          message: "login success.",
        })
      } else {
        return res.status(400).json({
          status: false,
          message: "login failed!"
        })
      }
    }

    return res.status(400).json({
      status: false,
      message: "Email is not registered!, please register first!",
    })
  } catch (error) {
    console.log(error)
    throw error;
  }
}

const register = async (req, res) => {
  const { email, password } = req.body

  try {
    if ( email && password ) {
      await createUserService(email, password)

      return res.status(200).json({
        status: true,
        message: "success.",
      })
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {
    const updated = await updateUserService(id, data)

    if (updated == 0) {
      return res.status(404).json({
        status: false,
        message: `can't find user with id ${id}!`,
        data: null
      });
    }

    res.status(200).json({
      status: true,
      message: "success"
    })
  } catch (error) {
    console.log(error)
    throw(error)
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const result = await deleteUserService(id)

    if (result == 0) {
      return res.status(404).json({
        status: false,
        message: `can't find user with id ${id}!`,
        data: null
      });
    }

    res.status(200).json({
      status: true,
      message: "success"
    })
  } catch (error) {
    console.log(error)
    throw(error)
  }
}

module.exports = {
  login,
  register,
  update,
  deleteUser
}