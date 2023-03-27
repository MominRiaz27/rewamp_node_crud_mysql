import express from "express"
const app=express();

import cors from "cors"

import dataRouter from "./route/route.js"


//import expressValidator from 'express-validator';
//app.use(expressValidator());

app.use(express.json())
app.use(cors())
app.use('/api', dataRouter);


//app.use('/', (req,res)=>{
//     console.log(req.body)
//     const token = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
//     transport.sendMail({
//         from: "Momin.Riaz427@gmail.com",
//         to: "Momin.Riaz427@gmail.com",
//         subject: "Reset Password",
//         html: `<h1>Reset Password Feature Test</h1>
//             <h2>Hello ${"Momin"}</h2>
//             <h2>Token ${token}</h2>
//             </div>`,
//       }).catch(err => console.log(err));
//       res.json(token);
//});


// app.use(
//     '/api-docs',
//     swaggerUi.serve, 
//     swaggerUi.setup(swaggerDocument)
//   );

export const sendEmail = ()=>{
    
      transport.sendMail({
        from: "Momin.Riaz427@gmail.com",
        to: "detig17215@pubpng.com",
        subject: "Your account is Registered",
        html: `<h1>Email Feature Test</h1>
            <h2>Hello ${"Momin"}</h2>
            <h2>Email ${"Momin.Riaz427@gmail.com"}</h2>
            </div>`,
      }).catch(err => console.log(err));
}

  app.listen(3000,()=>{
    console.log("app is running in mode: " , 3000)
  });