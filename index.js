require('dotenv').config()
const express = require("express")
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
})
app.get('/login',(req,res)=>{
    res.send('First Login to Our Website');
})
app.get('/signup',(req,res)=>{
    res.send('Sign Up Page')
})
app.get('/about',(req,res)=>{
    res.send('Sign Up Page')
})



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port http://localhost:${PORT}`);
    
})