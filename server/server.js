const express = require('express');
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth", router);

app.get('/',(req,res)=>{
   res.status(200).send('hey this is divyanshu ')
})

app.get('/register',(req,res)=>{
    res.status(200).send('Weloconme to my register page')
 })


const PORT= 7000;
app.listen(PORT , ()=>{
    console.log(`server is start ${PORT}`)
})