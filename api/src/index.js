import 'dotenv/config.js';
// console.log(process.env);

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { checkJwt } from './auth/jwt-middleware.js'; //

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(checkJwt); //

// ATTENTION : Un seul handler à la fois !!!

// app.get('/', (req, res) => {
//   res.status(200).send('Hello world');
// });

app.get('/', (req, res) => {
  res.status(200).send(`Hello ${req.auth.sub}`);
});

app.listen(8090);
