#### File System Methods ~~ readFile,writeFile renameFile

- What is readFile in Nodejs?
- It asynchronously reads the entire contents of a file.

```js
    fs.readFile(path.join(__dirname, 'hello.txt'),'utf8',(err,data)=>{
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
})
```
-  What is readFileSync in Nodejs?
-  It synchronously reads the entire contents of a file.
```js
    const data = fs.readFileSync(path.join(__dirname,'hello.txt'),'utf8',(err,data)=>{
        if(err) return err;
        else return data;
    })
    console.log(data);
```

-  What is writeFile in Nodejs?
-  It asynchronously write the contents to a file.
```js
    fs.writeFile(path.join(__dirname, 'name.txt'),'Anamika Gupta',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('file saved');
    })
```

-  What is writeFileSync in Nodejs?
-  It synchronously write the data to a file.
```js
   fs.writeFile(path.join(__dirname, 'name.txt'),'Anamika Gupta Synchronous File',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('file saved');
    })
```
-  What is rename in Nodejs?
-  It asynchronously rename the name of the file.
```js
 fs.rename(path.join(__dirname, 'meta','name.txt'),path.join(__dirname, 'meta','my_name.txt'),err=>{
        if(err) throw err;
        else console.log('File renamed')
    })
```
- What is renameSync in Nodejs?
-  It synchronously rename the name of the file.
```js
   fs.rename(path.join(__dirname, 'meta','name.txt'),path.join(__dirname, 'meta','my_name.txt'),err=>{
        if(err) throw err;
        else console.log('File renamed')
    })
```


#### explain the difference between synchronous and asynchronous reading of files
- Synchronous functions are called blocking functions while Asynchronous functions are called non-blocking functions.
- Synchronous functions blocks the execution of the program until the file operation has finished processing while  asynchronous functions does not block the execution of the program.
- if the files are too large then synchronous functions might take more time than asynchronous functions.

#### What are the benefits of async?
- Asynchronous functions are generally more preferred than synchronous functions, as they do not block the execution of the program whereas synchronous functions block the execution of the program until it has finished processing.
