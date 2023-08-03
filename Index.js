import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import Routes from "./src/routes/Routes.js"
import { port_be } from "./config/commands/ConfigurationDb.js"
import Database from "./config/database/Database.js"
Database.authenticate()
    .then((result) => {
        console.log("Database connection successful");
    }).catch((err) => {
        console.error("Error connecting to the database:", err);
    });

const app = new express()
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials : true, origin : "http://localhost:3000"}))

app.use(Routes)
app.listen(port_be, () => {
    console.log(`listening on port ${port_be} `)
})
