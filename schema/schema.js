import Joi from "joi"

export const signupSchema = Joi.object({
    Email:Joi.string().email().required(),
    Password: Joi.string().required().label('Password'),
    ConfirmPassword: Joi.string().valid(Joi.ref('Password')).required().messages({
        'any.only': 'Passwords do not match',
      }),
    CNIC:Joi.number().required()
})

export const loginSchema = Joi.object({
    Email:Joi.string().email().required(),
    Password: Joi.string().required()
})