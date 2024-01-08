const app=require('./app')
// console.log(app.y())
// console.log(app.x);
// const fs=require("fs")

// fs.writeFileSync("code.txt","hello coder")

// const wfs=require("fs").writeFileSync;
// wfs("fileSync.txt","test text")

// const http=require("http")
// http.createServer((req,resp)=>{
// resp.write("<h1>Hello,this is response from local host 4500<h1>");
// resp.end();
// }).listen(4500)
str="<h1>Hello,this is response from function at local host 4500<h1>"
const basicServer=(req,resp)=>{
    resp.write(str);
    resp.end();
    }
const http=require("http")
http.createServer(basicServer).listen(4500)

const color = require("colors")
console.log("hello".red);
