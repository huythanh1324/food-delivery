import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId: {type: String, require: true},
    items: {type: Array, require: true},
    amount: {type: Number, require: true},
    address: {type: Object, require: true},
    status: {type: String, default:"Food Processing"},
    data:{type: Date, default: Date.now()}
})

const orderModel = mongoose.models.order || mongoose.model('order',orderSchema)

export default orderModel;