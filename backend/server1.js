const express = require("express");
const app = express();
app.use(express.json());
const PORT=3000;
import {createTodo} from "./types";
//title description
 
app.get("/todo",(req,res)=>{
    const createPayload=req.body;
    const validate=createTodo.safeParse(createPayload);
    if(validate.success){
        res.json({msg:"todo added"})
    }
    else{
        res.status(403).send({msg:"Not a Valid User"})
    }
})


app.get("/todos",(req,res)=>{
    
})


app.put("/completed",(req,res)=>{
   
})

app.listen(PORT);


