import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(router);


//const corsOptions = {
//  origin: '*',
//  optionsSuccessStatus: 201
//};
app.use(cors());
//app.use(cors({
//  'allowedHeaders': ['sessionId', 'Content-Type'],
//  'exposedHeaders': ['sessionId'],
//  'origin': '*',
//  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//  'preflightContinue': false
//}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
  next();
});

mongoose
  .connect("mongodb://localhost/marketlist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Its Alive!");
  })
  .catch((err) => {
    console.log("Deu Ruim");
    console.log(err);
  });

app.listen(8080, () => {
  console.log("ITS WORKING");
});
