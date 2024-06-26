import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder,userOrder,listOrder,updateStatus } from '../controllers/orderController.js'

const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/userorder',authMiddleware,userOrder);
orderRouter.get('/list',listOrder);
orderRouter.post('/status',updateStatus);

export default orderRouter;