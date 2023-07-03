import express from "express";
import dotenv from 'dotenv';

import { databaseConnection } from "./config/database-connection.js";
import { userRouter } from "./routes/user-routes.js";
import { globalError } from "./middlewares/global-error.js";

import { categoriesRouter } from "./routes/categories-routes.js";
import { productsRouter } from "./routes/products-routes.js";


const app = express();


dotenv.config();

const PORT = process.env.PORT || 3000;

// connect to database
databaseConnection()

app.use(express.json())
app.use('/', userRouter)
app.use('/category', categoriesRouter)
app.use('/products', productsRouter)


app.use(globalError)
app.listen(PORT, ()=>{
	console.log(`server listen on localhost//${PORT}`)
})