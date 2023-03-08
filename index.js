import express from "express"
const app=express();
import "dotenv/config"
import dataRouter from "./route/router.js"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json" assert { type: "json" }
import logger from "./logger/logger.js";
import cors from "cors"


import expressValidator from 'express-validator';
app.use(expressValidator());

app.use(express.json())
app.use(cors())


app.use('/api', dataRouter);
// app.use(
//     '/api-docs',
//     swaggerUi.serve, 
//     swaggerUi.setup(swaggerDocument)
//   );

  app.listen(process.env.PORT,()=>{
    console.log(process.env.COMPANY_EMAIL)
    logger.info("app is running in mode: " , process.env.PORT)
  });