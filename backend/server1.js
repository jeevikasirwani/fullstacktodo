const express = require("express");
const app = express();
app.use(express.json());
const PORT=3000;
import { TodoModel } from "./db";
import {createTodo, updateTodo} from "./types";
//title description
 
app.get("/todo",async(req,res)=>{
    const createPayload=req.body;
    const validate=createTodo.safeParse(createPayload);
    if(!validate.success){
        res.status(403).send({msg:"Not a Valid User"})
        return;
    }
  await TodoModel.create({
    title:createPayload.title,
    description:createPayload.description
   })
   res.json({
    msg:"User Created"
   })
})


app.get("/todos",(req,res)=>{
    
})


app.put("/completed",(req,res)=>{
    const updatePayload=req.body;
    const validate=updateTodo.safeParse(updatePayload);
    if(validate.success){
        res.json({msg:"todo updated"})
    }
    else{
        res.status(403).send({msg:"Tree clean nothing to update"})
    }
})

app.listen(PORT);


