import logger from '../logger/logger.js';
import Customers from '../model/Biodata.js';

export const getAllCustomers = async (req, res) => {
    await Customers.getAllCustomers().then((result) => {
        res.json(result[0])
    })
}

export const getCustomerById = async (req, res) => {
    await Customers.getCustomerById(req.params.id).then((result) => {
        if ( result[0].length > 0 ) {
            res.json(result[0])
        } else {
            res.json({ message: "customer not found" })
        }
    })
}

export const postCustomer = async (req, res) => {
    await Customers.postCustomer(req.body)
    .then(() => {
        res.json({
            success: true, 
            result: 'the row is inserted successfully'
        })
    })
    .catch((error) => {
        logger.error(error)
        res.json({
            success: false, 
            result: error.message
        })
    })
}

export const putCustomerById = async (req, res) => {
    await Customers.putCustomerById(req.params.id, req.body) 
    .then(() => {
        res.json({
            success: true, 
            result: 'the row is updated successfully'
        })
    })
    .catch((error) => {
        logger.error(error)
        res.json({
            success: false, 
            result: error.message
        })
    })
}

export const deleteCustomerById = async (req, res) => {
    await Customers.deleteCustomerById(req.params.id)
    .then(() => {
        res.json({
            success: true, 
            result: 'the row is deleted successfully'
        })
    })
    .catch((error) => {
        logger.error(error)
        res.json({
            success: false, 
            result: error.message
        })
    })
}

