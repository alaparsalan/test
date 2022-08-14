const jwt = require('jsonwebtoken');
const { JWT_TOKEN } = require('../config');
module.exports=async(req,res,next) =>{
    const token = req.header('Authorization').split(" ")[1];
    if (!token) {
        return res.status(401).send('ACESS DENIED')
    }
    try {
        const verified = jwt.decode(token,JWT_TOKEN)
        req.user = verified;
        console.log("verifiedverifiedverified",verified);
       next();
      
  
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}
