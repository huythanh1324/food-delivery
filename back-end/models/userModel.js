import mongoose from "mongoose"

const userShcema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true,unique: true},
    password: {type: String, require: true},
    cartData: {type: Object, default: {}}
},
{
    minimize: false
})

const userModel = mongoose.models.user || mongoose.model("user",userShcema)
export default userModel;