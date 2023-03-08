import logger from "../logger/logger.js";
import { signupSchema, loginSchema } from "../schema/schema.js";


function  loginValidation (req, res, next)  {
    const value =  loginSchema.validate(req.body);
    if (value.error) {
        logger.error(value.error)
        res.json({
            success: 0,
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}

export default loginValidation;