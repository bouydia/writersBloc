const mongoose = require('mongoose')
const Joi = require('joi')
const { Schema } = mongoose

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamp: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const User = mongoose.model('User', UserSchema)

//Validate User
function validateUser(obj) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().min(5).max(100).required().email(),
    phone: Joi.string()
      .regex(/^\+?[0-9]{10,15}$/)
      .required(),
  })

  return schema.validate(obj)
}


module.exports = {
  User,
  validateUser,
}
