import express from "express" ;
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
configDotenv()
const app = express()
app.use(express.json())
const port = process.env.PORT








app.listen( port , ()=>{
    console.log(`Server has started successfully on port: ${port}`)
    connectDB()
} );

app.get("/" ,( req , res )=>{
    res.send("The server is working perfectly")
});