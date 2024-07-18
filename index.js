import express from 'express';

const app=express();

app.get("/getproducts", (req, res)=>{
    res.json({
        success:true,
        products:[],
    })
})

app.listen(5000, ()=>{
    console.log("server is working");
})