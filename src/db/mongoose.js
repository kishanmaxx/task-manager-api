const mongoose = require('mongoose');
// const validator = require('validator');
mongoose.connect(process.env.MONGODB_URI);
// const User = mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     passward:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:7,
//         validate(value){
//             if(value.toLowerCase().includes("password")){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }

//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// });

// const Task = mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// });

// const task = new Task({
//     description:'Express library',
//     completed:true
// });

// task.save().then(()=>{console.log(task)}).catch(error=>{console.log(error)});

// const me = new User({
//     name:"Advik",
//     age:2,
//     email:"advik1@example.com",
//     passward:"MyPass777!"
// });

// me.save().then(()=>{
//     console.log(me);
// }).catch(error=>{
//     console.log(error);
// })