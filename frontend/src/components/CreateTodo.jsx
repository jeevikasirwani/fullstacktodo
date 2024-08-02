
import { useState } from "react";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        alert("Todo Added!");
        setTodos([...todos, { title, description }]); 
        setTitle(""); 
        setDescription(""); 
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  return (
    <>
      <input
        style={{
          padding: 10,
          margin: 10,
          color: "#747bff",
          backgroundColor: "#242424",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={{
          padding: 10,
          margin: 10,
          color: "#747bff",
          backgroundColor: "#242424",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "#242424",
          color: "#747bff",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={handleAddTodo}
      >
        Add a Todo
      </button>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
