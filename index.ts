import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config();
const app = express()


const corsOrigin = process.env.CORS_ORIGIN || "*"
app.use(cors({

    // If this website goes to web, we have to change the .env to new route 
    origin: corsOrigin,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

import ordersRoutes from "./routes/orders"

app.use(express.json())
app.use('/orders', ordersRoutes)


app.get('/', (req, res) =>{
    res.send("Hello Wordl")
})

const PORT = 4444

app.listen(PORT, () => {
    console.log(`Listening in ${PORT}`)
})
