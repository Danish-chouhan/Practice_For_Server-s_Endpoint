const express = require("express");
const app = express()


app.get("/",(req,res)=>{
  res.send("this is working");
})
app.listen(4000,()=>{
    console.log(`yes 3000 is my port`);
})
