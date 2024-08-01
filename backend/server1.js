const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
import mongoose from "mongoose";
import { TodoModel } from "./db";
import { createTodo, updateTodo } from "./types";
//title description

app.get("/todo", async (req, res) => {
    const createPayload = req.body;
    const validate = createTodo.safeParse(createPayload);
    if (!validate.success) {
        res.status(403).send({ msg: "Not a Valid User" })
        return;
    }
    await TodoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "User Created"
    })
})


app.get("/todos", async (req, res) => {
    const todo = await TodoModel.find({});
    res.json({
        todo
    })
})


app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const validate = updateTodo.safeParse(updatePayload);
    if (!validate.success) {
        res.status(403).send({ msg: "Tree clean nothing to update" })
        return;
    }
    await TodoModel.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Marked as Completed"
    })

})

app.listen(PORT);


