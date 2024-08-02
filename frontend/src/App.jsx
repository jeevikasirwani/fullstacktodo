// import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
 
  return (
    <>
      <h1>TODO APP📝🍃</h1>
      <CreateTodo />
      <Todos/>
    </>
  );
}

export default App;
