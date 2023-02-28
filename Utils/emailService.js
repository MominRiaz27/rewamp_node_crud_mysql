import  transport  from '../config/email.js';
export const sendEmail = (req)=>{
    
    transport.sendMail({
      from: process.env.COMPANY_EMAIL, //Company Email from .env file
      to: req.body.Email,
      subject: "Your account is Registered",
      html: `<h1>Email Feature Test</h1>
          <h2>Hello ${"Name: XYZ"}</h2>
          <h2>Email ${req.body.Email}</h2>
          </div>`,
    }).catch(err => console.log(err));
}

