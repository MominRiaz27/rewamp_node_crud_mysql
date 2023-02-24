import express from "express"
const app=express();

import dataRouter from "./route/router.js"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json" assert { type: "json" }
import logger from "./logger/logger.js";

const PORT = 8000;
app.use(express.json())
app.use('/api', dataRouter);
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

  app.listen(PORT,()=>{
    logger.info("app is running in mode: " , process.env.PORT)
  });