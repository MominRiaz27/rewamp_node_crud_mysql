import Router from 'express';
const router = Router();

import { 
    getAllCustomers, 
    getCustomerById,
    postCustomer,
    putCustomerById,
    deleteCustomerById,
} from '../controller/dataController.js';

import customerValidation from '../validation/validation.js';

router.get('/get', getAllCustomers);
router.get('/:id', getCustomerById);
router.post('/post', customerValidation, postCustomer);
router.put('/:id', putCustomerById);
router.delete('/:id', deleteCustomerById);

export default router