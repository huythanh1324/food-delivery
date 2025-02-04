import jwt from 'jsonwebtoken'

const authMiddleware = async (req,res,next) =>{
    const {token} = req.headers;
    if(!token){
        res.json({success: false,message:"Not authorized, login again"})
    }

    try{
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = tokenDecode.id
        next()
    }catch(err){
        console.log(err)
        res.json({success:false, message:"Auth Error"})
    }
}

export default authMiddleware;