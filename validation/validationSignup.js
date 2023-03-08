import logger from "../logger/logger.js";
import { signupSchema } from "../schema/schema.js";



   function  signupValidation (req, res, next)  {
        const value =  signupSchema.validate(req.body);
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

     
//export default signupValidation ;
export default signupValidation;
