import Router from 'express';
import ExpressValidator from 'express-validator';
const router = Router();
router.use(ExpressValidator())

import { 
    getAllCustomers, 
    getCustomerById,
    deleteCustomerById,
    Signup,
    Login
} from '../controller/dataController.js';
import loginValidation from '../validation/validateLogin.js';
import signupValidation from '../validation/validationSignup.js';



// router.get('/get', getAllCustomers);
// router.get('/:id', getCustomerById);
router.post('/signup', signupValidation, Signup);
router.post('/login',loginValidation,  Login);  // different validation 
// router.put('/:id', putCustomerById);
// router.delete('/:id', deleteCustomerById);

export default router