import express from 'express';
const app = express();
import { PORT } from './config/server.config';
import bodyParser from 'body-parser';
import { apiRouter } from './routes';
import errorHandler from './utils/errorHandler';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text())

app.use("/api",apiRouter)

app.get("/ping",(req,res)=>{
  return res.json({message:"Problem service is alive"});
})

app.use(errorHandler);

app.listen(PORT,()=>{
  console.log("Problem service listning on",PORT);
})