import * as dotenv from "dotenv";
import express from "express";
import { connectToDatabase } from "./src/db/database";

// load env variables
dotenv.config();

const uri = process.env.DB_CONN_STRING;

if (!uri) {
    console.log("No env variable found");
    process.exit(1);
}

connectToDatabase(uri)
    .then(()=>{
        const app = express()
        app.use(express.json());
        app.listen(5200, ()=> {
            console.log("Server running at http://localhost:5200");
        })
    })
    .catch(error => console.error(error));
