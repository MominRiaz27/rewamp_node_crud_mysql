import nodemailer from "nodemailer"


const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "Momin.Riaz427@gmail.com", // your Email
      pass: "zjwayepotecpctlc",        //  your Password
    },
  });

  export default transport;