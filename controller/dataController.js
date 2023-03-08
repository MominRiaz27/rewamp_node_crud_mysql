import logger from '../logger/logger.js';
import Customers from '../model/Biodata.js';
import nodemailer from "nodemailer"
import  transport  from '../config/email.js';
import { sendEmail } from '../Utils/emailService.js';
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"




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

export const Signup = (req, res) => {
    console.log("inside signup")
     Customers.Signup(req.body)
    .then(() => {
        //sendEmail(req)
        res.json({
            success: true, 
            message: 'the row is inserted successfully'
        })
    })
    .catch((error) => {
        logger.error(error)
        res.json({
            success: false, 
            message: error.message
        })
    })
}

export const Login = async (req, res) => {
    await Customers.Login(req.body) 
    .then(([row]) => {
        console.log(row[0])
        console.log(row[0].EncryptedPassword)
        bcrypt.compare(req.body.Password, row[0].EncryptedPassword, function(err, result) {
            console.log(result)
            if(result == true){
                const token = jwt.sign(row[0], 'my-secret-key');
                res.header('Authorization', `Bearer ${token}`);
                res.set('Access-Control-Expose-Headers', 'Authorization');
                res.json({
                    success: true, 
                    message: 'User Matched'
                })
            }
            else{
                res.send("password dosen't match ")
            }
            
         });
        
        
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

