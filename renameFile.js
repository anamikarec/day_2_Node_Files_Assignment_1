const path = require('path');
const fs = require('fs');

// folder creation
// fs.mkdir(path.join(__dirname, 'meta'),err=>{
//     if(err) throw err;
//     else console.log('Folder created.')
// })

// rename to a file
fs.rename(path.join(__dirname, 'meta','name.txt'),path.join(__dirname, 'meta','my_name2.txt'),err=>{
    if(err) throw err;
    else console.log('File renamed')
})

// rename to a file sync...
fs.renameSync(path.join(__dirname, 'meta','my_name2.txt'),path.join(__dirname, 'meta','my_name.txt'),err=>{
    if(err) throw err;
    else console.log('File renamed')
})

