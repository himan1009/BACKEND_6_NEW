import http from "http";
import {gfName, gfName1, love} from "./features.js";
import fs from "fs";
import path from "path";

const home=fs.readFileSync("./index.html");

console.log(path.extname("/home/random/index.html"));
console.log(gfName);
console.log(gfName1);

const server = http.createServer((req, res) => {
    if(req.url==="/about"){
        res.end(`<h1>LOVE IS ${love()}</h1>`)
    }
    else if(req.url==="/"){
        fs.readFile("./index.html", (err, home)=>{
            res.end(home);
        });
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
