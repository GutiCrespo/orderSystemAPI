import express from 'express'
import cors from "cors";

const app = express()

import ordersRoutes from "./routes/orders"


app.use(express.json())
app.use('/orders', ordersRoutes)
app.use(cors());

app.get('/', (req, res) =>{
    res.send("Hello Wordl")
})

const PORT = 4444

app.listen(PORT, () => {
    console.log(`Listening in ${PORT}`)
})
