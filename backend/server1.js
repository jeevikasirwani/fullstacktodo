const express = require("express");
const app = express();
app.use(express.json());
const PORT=3000;

//title description
 
app.get("/todo",(req,res)=>{

})


app.get("/todos",(req,res)=>{
    
})


app.put("/completed",(req,res)=>{
    
})

app.listen(PORT);


