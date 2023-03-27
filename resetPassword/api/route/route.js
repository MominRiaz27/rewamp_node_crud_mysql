import Router from 'express';
//import ExpressValidator from 'express-validator';
const router = Router();
//router.use(ExpressValidator())
import { 
    Signup,
    Login,
    getCustomerByEmail,
    updatePassword
} from '../controller/controller.js';



// router.get('/get', getAllCustomers);
// router.get('/:id', getCustomerById);
router.post('/signup',  Signup);
router.post('/login',  Login);  // different validation 
router.post('/email',  getCustomerByEmail);
router.post('/resetPass',  updatePassword);
// router.put('/:id', putCustomerById);
// router.delete('/:id', deleteCustomerById);

export default router