const path = require('path');
const fs = require('fs');

// async method
fs.readFile(path.join(__dirname, 'hello.txt'),'utf8',(err,data)=>{
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
})

// sync 
const data = fs.readFileSync(path.join(__dirname,'hello.txt'),'utf8',(err,data)=>{
    if(err) return err;
    else return data;
})
console.log(data);