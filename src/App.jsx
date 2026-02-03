import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { todosItems } from "../todoItems.js";

const App = () => {
  const [todos, setTodos] = useState(todosItems);
  return (
    <div className="container">
      <Header />
      <div className="container--input">
        <input type="text" className="container--input_type" />
        <button className="container--input_btn">Add Todos</button>
      </div>
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
