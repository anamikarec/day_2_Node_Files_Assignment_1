const path = require('path');

const fs = require('fs');

fs.writeFile(path.join(__dirname, 'name.txt'),'Anamika Gupta',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('file saved');
})

fs.writeFile(path.join(__dirname, 'name.txt'),'Anamika Gupta Synchronous File',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('file saved');
})

