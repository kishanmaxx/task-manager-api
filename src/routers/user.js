const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');
const { sendWelcomeEmail,sendCancellationEmail } = require('../email/account');
const multer = require('multer');
const sharp = require('sharp');
const upload = multer({
    // dest:'avatars',
    limits:{fileSize:1000000},fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload an image'));
        }
        cb(undefined,true);
    }
});

router.post('/users',async (req,res)=>{
    console.log(req.body);
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    try{
        await user.save();
        sendWelcomeEmail(user.email, user.name);
        // res.status(201).send(user);
        res.status(201).send({user,token});
    }
    catch(e){
        res.status(400).send(e);
    }
    

    // user.save().then(()=>{
    //     res.send(user);
    // }).catch((err)=>{
    //     console.log(err);
        // res.status(400);
        // res.send(err);
        // res.status(400).send(err);
    // });
    // res.send('Testing');
});

router.post('/users/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        // res.send({user:user.getPublicProfile(),token});
        res.send({user ,token});
    }
    catch(e){
        res.status(400).send();
    }
});

router.post('/users/logout', auth, async (req,res)=>{
    try{
        let user = req.user;
        user.tokens = user.tokens.filter(token=>{
            return token.token !== req.token;
        })
        console.log('This is the user tokens after logout');
        await user.save();
        res.send();
    }
    catch(e){
        console.log('Error in logout',e);
        res.status(500).send();
    }
});

router.post('/users/logoutAll', auth, async (req,res)=>{
    try{
        req.user.tokens = [];
        await req.user.save();
        res.send();
    }
    catch(e){
        res.status(500).send();
    }
})

router.get('/users/me', auth, async (req,res)=>{
    let user = req.user;
    console.log('This is the user from auth middleware',user);
    res.send(user);
    // try{
    //     const users = await User.find({});
    //     res.send(users);
    // }
    // catch(e){
    //     res.status(500).send();
    // }

    // User.find({}).then(users=>{
    //     res.send(users);
    // }).catch(e=>{
    //     res.status(500).send();
    // });
});

// router.get('/users/:id',async (req,res)=>{
//     const _id = req.params.id;
    
//     try{
//         const user = await User.findById(_id);
//         if(!user){
//             return res.status(404).send();
//         }
//         res.send(user);
//     }catch(e){
//         res.status(500).send()
//     }
    
//     // User.findById(_id).then(user=>{
//     //     if(!user){
//     //         return res.status(404).send();
//     //     } 
//     //     res.send(user);
//     // }).catch(e=>{
//     //     res.status(500).send();
//     // });
// });

// router.patch('/users/:id',async (req,res)=>{
    router.patch('/users/me',auth ,async (req,res)=>{
    const allowedUpdates = ['name','email','password','age'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates!'});
    }
    try{
        const user = await User.findById(req.user._id);
        updates.forEach(update=>{
            user[update] = req.body[update];
        });
        user.save();
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    }
    catch(e){
        res.status(400).send(e);
    }
});

router.delete('/users/me',auth, async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.user._id);
        if(!user){
            return res.status(404).send();
        }
        sendCancellationEmail(user.email, user.name);
        // console.log('This is the user from auth middleware',req.user);
        // await req.user.remove();
        res.send(user);
    }
    catch(e){
        console.log('Error in deleting user',e);
        res.status(500).send();
    }
});

router.post('/users/me/avatar',auth , upload.single('avatar'), async (req,res)=>{
    // req.user.avatar = req.file.buffer
    const buffer = await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send();
},(error, req,res,next)=>{
    res.status(400).send({error:error.message});
});

router.delete('/users/me/avatar',auth , async (req,res)=>{
    req.user.avatar = undefined;
    await req.user.save();
    res.send();
});

router.get('/users/:id/avatar', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user || !user.avatar){
            throw new Error();
        }
        res.set('Content-Type','image/png');
        res.send(user.avatar);
    }
    catch(e){
        res.status(404).send();
    }
});

module.exports = router;