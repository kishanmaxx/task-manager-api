const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req,res,next)=>{
    console.log('This is the auth middleware');
    // next();
    try{
        const token = req.header('Authorization').replace('Bearer ','');
        console.log('Token from auth middleware',token);
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = User.findOne({_id:decoded._id,'tokens.token':token});
        console.log('User from auth middleware',user);
        let testUser = await user;
        if(!testUser){
            console.log('User not found in auth middleware');

            throw new Error();
        }
        console.log('User found in auth middleware');
        req.token = token;
        req.user = testUser;
        next();
    }
    catch(e){
        res.status(401).send({error:'Please authenticate'});
    }
}

module.exports = auth;