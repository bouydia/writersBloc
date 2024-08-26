const asyncHandler = require('express-async-handler')
const { validateUser, User } = require('../model/user')

module.exports.registerUser = asyncHandler(async (req, res) => {
  const { error } = validateUser(req.body)
    if (error) return res.status(400).json({ message: error.details[0].message })
    
  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).json({ message: 'user already exist ' })
    
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  })
   await newUser.save()

   //send a response to client
   res
     .status(201)
     .json({ message: 'your registered successfylly in the whiteList' })
})

module.exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
  return res.json(users)
})