import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import routes from './routes';

import swaggerFile from './documentation/swagger.json'
const swaggerUi = require("swagger-ui-express");
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8888, function () {
  console.log(`server running in port 8888`);
});
