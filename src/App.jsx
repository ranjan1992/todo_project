import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { todosItems } from "../todoItems.js";

const App = () => {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState(todosItems);

  const handleAddTodo = () => {
    let itemToAdd = {
      id: Math.floor(Math.random() * 999999),
      title: item,
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, itemToAdd];
    });
    setItem("");
  };
  return (
    <div className="container">
      <Header />
      <div className="container--input">
        <input
          type="text"
          className="container--input_type"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="container--input_btn" onClick={handleAddTodo}>
          Add Todos
        </button>
      </div>
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
