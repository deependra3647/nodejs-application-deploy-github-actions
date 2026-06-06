const express = require('express');
const app=express();
const PORT = process.env.PORT ?? 7070;

app.get("/",(req,res)=>{
  res.json({msg: "Hello this is Deep"});
})

app.listen(PORT,()=>{
  console.log(`Server running in PORT ${PORT}`)
})