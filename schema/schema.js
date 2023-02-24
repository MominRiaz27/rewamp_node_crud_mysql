import Joi from "joi"

export const reqSchema = Joi.object({
    Email:Joi.string().email().required(),
    Password: Joi.string().required(),
    Number:Joi.number(),
    Date:Joi.string(),
    CNIC:Joi.number()
})