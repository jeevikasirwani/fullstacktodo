const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://jeevikasirwani2003:zxLBHNXzixAzBHYm@todoapp.yc6gaw6.mongodb.net/todoapp")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
// mongodb+srv://jeevikasirwani2003:zxLBHNXzixAzBHYm@todoapp.yc6gaw6.mongodb.net/todoapp