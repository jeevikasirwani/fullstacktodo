const mongoose=require("mongoose");
mongoose.connect("your url")
const TodoSchema=mongoose.Schema=({
    title:String,
    description:String,
    completed:Boolean
})

const TodoModel=mongoose.model("todomodel",TodoSchema)


module.exports={
    TodoModel:TodoModel
}