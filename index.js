const http = require("http");
const gfName=require("./features")

console.log(gfName);

const server = http.createServer((req, res) => {
    if(req.url==="/about"){
        res.end("<h1>ABOUT PAGE</h1>")
    }
    else if(req.url==="/"){
        res.end("<h1>HOME PAGE</h1>");
    }
    else if(req.url==="/contact"){
        res.end("<h1>CONTACT PAGE</h1>");
    }
    else{
        res.end("<h1>PAGE NOT FOUND</h1>");
    }
});

server.listen(5000, () => {
  console.log("server is wroking");
});
