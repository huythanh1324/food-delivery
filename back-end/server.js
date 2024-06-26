import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import 'dotenv/config'

//app config
const app = express()
const PORT = 4000

//middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("API Working")
})

// connect to db
connectDB()

// api endpoints
app.use('/api/food',foodRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/images',express.static('uploads'))

app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})