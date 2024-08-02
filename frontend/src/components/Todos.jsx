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
          </div>
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}
