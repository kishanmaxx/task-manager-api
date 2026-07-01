require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('69b3b980610a7a030f074bb2',{age:2}).then(user=>{
//     console.log(user);
//     return User.countDocuments({age:2});
// })
// .then(count=>{
//     console.log(count);
// })
// .catch(e=>console.log(e))

const updateAgeAndCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id,{age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('69b3b980610a7a030f074bb2', 3).then(count=>{console.log(count)}).catch(e=>console.log(e))