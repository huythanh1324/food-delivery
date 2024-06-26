import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


//placing user order for frontend
const placeOrder = async (req,res) =>{
    const frontend_url = 'http://localhost:5173'
    try{
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,

        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}});


        

        res.json({success: true,message:"Order success"})

    }catch(err){
        console.log(err)
        res.json({success: false, message: "Error"})
    }
}

// user order for frontend 
const userOrder = async(req,res) => {
    try{
        const orders = await orderModel.find({userId: req.body.userId});
        res.json({success: true, data: orders})
    }catch(err){
        console.log(err)
        res.json({success: false, message: "Error"})
    }
}

// list order for admin pannel
const listOrder = async(req,res) =>{
    try{
        const orders = await orderModel.find({})
        res.json({success: true, data:orders})
    }catch(err){
        console.log(err)
        res.json({success:false, message: "Error"})
    }
}

// updating order status
const updateStatus = async (req,res) => {
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success: true,message:"Status updated"})
    }catch(err){
        console.log(err)
        res.json({succes: false,message:"Error"})
    }
} 

export {placeOrder,userOrder,listOrder,updateStatus}