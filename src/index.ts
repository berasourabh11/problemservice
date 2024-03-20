import express from 'express';

const app = express();


app.get("/",(req,res)=>{
  res.send("Initialized");
})

app.listen(3000,()=>{
  console.log("admin service listning on port 3000")
})