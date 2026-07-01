// require('../src/db/mongoose');
// const Task = require('../src/models/task');
// Task.findByIdAndDelete('69afb7f4718c0c184e54f2b5').then(task=>{
//     console.log(task);
//     return Task.countDocuments({completed:false});
// })
// .then(count=>{
//     console.log(count);
// })
// .catch(e=>console.log(e));

require('../src/db/mongoose');
const Task = require('../src/models/task');
// Task.findByIdAndDelete('69b3c292167efe4bcde23858').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:false});
// })
// .then(count=>{
//     console.log(count);
// })
// .catch(e=>{
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false});
    return count;
}


deleteTaskAndCount('69aa6965b0996a276be5e04b').then(count=>{console.log(count)}).catch(e=>console.log(e))