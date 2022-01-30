const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'meta'),err=>{
//     if(err) throw err;
//     else console.log('Folder created.')
// })
fs.rename(path.join(__dirname, 'meta','name.txt'),path.join(__dirname, 'meta','my_name.txt'),err=>{
    if(err) throw err;
    else console.log('File renamed')
})