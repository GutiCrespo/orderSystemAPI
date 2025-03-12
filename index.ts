import express from 'express'
const app = express()
const port = 3000

import ordersRoutes from "./routes/orders"


app.use(express.json())
app.use('/orders', ordersRoutes)


app.get('/', (req, res) =>{
    res.send("Hello Wordl")
})

app.listen(port, () => {
    console.log(`Listening in ${port}`)
})
