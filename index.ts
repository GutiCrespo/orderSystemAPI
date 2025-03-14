import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config();
const app = express()

app.use(cors({ origin: true, credentials: true}));
app.use(express.json())

import ordersRoutes from "./routes/orders"
app.use('/orders', ordersRoutes)


app.get('/', (req, res) =>{
    res.send("Hello Wordl")
})

// Activated the nexts section to use locally:

// const PORT = 4444
// if (process.env.NODE_ENV !== "test") {
//     app.listen(PORT, () => {
//       console.log(`Listening on ${PORT}`);
//     });
//   }

export default app;
export {app}