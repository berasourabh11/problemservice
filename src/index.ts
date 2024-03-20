import express from 'express';
const app = express();
import { PORT } from './config/server.config';
import bodyParser from 'body-parser';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text())


app.get("/ping",(req,res)=>{
  return res.json({message:"Problem service is alive"});
})

app.listen(PORT,()=>{
  console.log("Problem service listning on",PORT)
})