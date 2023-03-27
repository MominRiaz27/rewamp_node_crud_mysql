// import logger from '../logger/logger.js';
 import Customers from '../model/model.js';
import nodemailer from "nodemailer"
// import { sendEmail } from '../Utils/emailService.js';
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import otpGenerator from  'otp-generator'
import  transport  from '../config/email.js';
 import crypto from "crypto"



export const getAllCustomers = async (req, res) => {
    await Customers.getAllCustomers().then(([result]) => {
        res.json(result)
    })
    }

export const getCustomerByEmail = async (req, res) => {
    await Customers.getCustomerByEmail(req.body.Email).then(([rows]) => {
        if ( rows.length > 0 ) {
            console.log("the email is : ", rows[0].Email)
            const token = sendEmail(rows[0].Email)
            res.json({token:token, Email: rows[0].Email})
        } else {
            res.json({ message: "customer not found" })
        }
    })
}
export const updatePassword = async (req, res) => {
     console.log("inside")
     Customers.updatePassword(req.body).then((result) => {
     console.log("obj",result[0].affectedRows)
// affectedRows
        if ( result[0].affectedRows > 0 ) {
            // console.log("the email is : ", rows[0].Email)
            // const token = sendEmail(rows[0].Email)
            res.status(202).json({ message: "customer Password Updated" })

        } else {
            res.status(404).json({ message: "customer not found" })
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
        //logger.error(error)
        res.json({
            success: false, 
            message: error.message
        })
    })
}

export const Login = async (req, res) => {
    console.log("hiii")
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
                res.json({
                    success: false, 
                    message: "incorrect Password"
                })
            }           
         });    
    })
    .catch((error) => {
        logger.error(error)
        res.json({
            success: false, 
            message: error.message
        })
    })
}


const encryptPayload = ((data)=>{
    const key = crypto.randomBytes(32);

    // Create a cipher using the encryption key
    const cipher = crypto.createCipher('aes-256-cbc', key);

    // Convert the object to a string
    const objStr = JSON.stringify(data);

    // Encrypt the object string using the cipher
    let encrypted = cipher.update(objStr, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
})




export const sendEmail = (email)=>{
    
    console.log(email)
    //const encryptedEmail = encryptPayload(email);
    //console.log(encryptedEmail)
    const token = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    transport.sendMail({
        from: email,
        to: email,
        subject: "Reset Password",
        html: `<h1>Reset Password Feature Test</h1>
            <h2>Hello ${"Momin"}</h2>
            <p>Your Token is :  ${token}</p>

            </div>`,
      }).catch(err => console.log(err));
      return token;
}

