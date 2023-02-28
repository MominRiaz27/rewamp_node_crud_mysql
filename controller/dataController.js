import logger from '../logger/logger.js';
import Customers from '../model/Biodata.js';
import nodemailer from "nodemailer"
import  transport  from '../config/email.js';
import { sendEmail } from '../Utils/emailService.js';




export const getAllCustomers = async (req, res) => {
    await Customers.getAllCustomers().then(([result]) => {
        res.json(result)
    })
    }

export const getCustomerById = async (req, res) => {
    await Customers.getCustomerById(req.params.id).then(([rows]) => {
        if ( result.length > 0 ) {
            console.log(result)
            res.json(result)
        } else {
            res.json({ message: "customer not found" })
        }
    })
}

export const postCustomer = (req, res) => {
     Customers.postCustomer(req.body)
    .then(() => {
        sendEmail(req)
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

// export const sendEmail = ()=>{
    
//       transport.sendMail({
//         from: "Momin.Riaz427@gmail.com",
//         to: "detig17215@pubpng.com",
//         subject: "Your account is Registered",
//         html: `<h1>Email Feature Test</h1>
//             <h2>Hello ${"Momin"}</h2>
//             <h2>Email ${"Momin.Riaz427@gmail.com"}</h2>
//             </div>`,
//       }).catch(err => console.log(err));
// }

