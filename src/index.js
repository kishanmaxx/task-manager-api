const app = require('./app');
// const express = require('express');
// const multer = require('multer');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');
// const userRouter = require('./routers/user');
// const taskRouter = require('./routers/task');

// const app = express();
const port = process.env.PORT || 3000;
// const upload = multer({
//     dest:'images',
// });

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled');
//     }
//     else{
//     next();
//     }

// });
// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. Check back soon!');
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send();
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message});
// });
// const errorMidddleware = (req,res,next) =>{
//     throw new Error("From my middleware");
// }
// app.post('/upload',errorMidddleware,(req,res)=>{
//     res.send();
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message});
// });
// app.use(express.json());

// app.use(taskRouter);
// app.use(userRouter);





app.listen(port,()=>{
    console.log('Server is running on port '+port);
})


// const bcrypt = require('bcryptjs');
// const myFunction =  async ()=>{
//     const password = 'Red12345!';
//     const hashedPassword = await bcrypt.hash(password,8);

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch = await bcrypt.compare(password,hashedPassword);
//     console.log(isMatch);
// }

// const jwt = require('jsonwebtoken');
// const Task = require('./models/task');
// const User = require('./models/user');
// // const myFunction = async () => {
// //     const token =  jwt.sign({_id:'jhjhd4642'},'thisismytestValue',{expiresIn:'7 days'});
// //     console.log(token);
// //     const data = jwt.verify(token,'thisismytestValue');
// //     console.log(data);
// // }
// const myFunction = async ()=>{

// // const task = await Task.findById('69ddd7cd58c172e537e4aa1c');
// // await task.populate('owner');
// // console.log(task.owner)
// // const user = await User.findById('69ddd7c758c172e537e4aa16');
// // await user.populate('tasks');
// // console.log(user.tasks);
// }
// myFunction();