import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddelivery:0903710062@cluster0.vreq5v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then( () => {
        console.log("Database connected")
    }) 
}

//mongodb+srv://fooddelivery:0903710062@cluster0.vreq5v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0