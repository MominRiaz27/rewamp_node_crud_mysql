import logger from "../logger/logger.js";
import { reqSchema } from "../schema/schema.js";



   function  customerValidation (req, res, next)  {
        const value =  reqSchema.validate(req.body);
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
export default customerValidation;