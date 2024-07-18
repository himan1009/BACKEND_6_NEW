import express from 'express';
import fs from 'fs';
import path from 'path';

const app=express();

app.get("/getproducts", (req, res)=>{
    const pathLocation=path.resolve();
    res.sendFile(path.join(pathLocation, "./index.html"));
})

app.listen(5000, ()=>{
    console.log("server is working");
})