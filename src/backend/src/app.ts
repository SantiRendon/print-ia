import express from "express";
import cors from "cors";
import "dotenv/config";

// Imports routes
import {router} from "./routes";
import db from "./config/mongo";

const app = express();

//settings
app.set("PORT", process.env.PORT || 4321);

// Middlewares
app.use(cors());
app.use(express.json())

// Routes
app.use(router);

db().then(()=> console.log("ready con"))


export default app;