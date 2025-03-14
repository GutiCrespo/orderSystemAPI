import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config();
const app = express()

app.use(cors({ origin: true, credentials: true}));

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
