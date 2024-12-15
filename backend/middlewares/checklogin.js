const jwt = require('jsonwebtoken');

const checklogin = async(req,res,next)=>{
    try{
        let bearertoken = req.headers.authorization;
        let token = bearertoken.split(' ')[1];

        let verifytoken = jwt.verify(token,process.env.SECRET_KEY);
        req.id = verifytoken.id;

        next()
    }
    catch(error){
        console.log(error);
        res.status(201).json({message:'error while checking login'})
    }
}

module.exports = checklogin;