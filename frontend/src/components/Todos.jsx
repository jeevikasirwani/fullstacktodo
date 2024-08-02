import { Error } from "mongoose";
import { useState, useEffect } from "react";

export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = async(id) => {
    try{
        const response=await fetch("http://localhost:3000/delete",{
            method:"DELETE",
        });
        if(!response.ok){
            throw new Error("Couldnt Delete");
        }const data=await response.json()
        setTodos(todos=>todos.filter(todos=>todos._id!=data._id))
    }catch(error){
        console.error("errror updating")
    }
  }

  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((todo, index) => (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? "Done" : "Not Done"}
            </button>
            <button onClick={() => deleteTodo(id)}>
              Delete
            </button>
            <button onClick={() => deleteTodo(id)}>
              Update
            </button>
          </div>
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}
