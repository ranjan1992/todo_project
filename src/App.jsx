import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { todosItems } from "../todoItems.js";

const App = () => {
  const [item, setItem] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);
  const [todos, setTodos] = useState(todosItems);

  const handleAddTodo = () => {
    if (!item.trim()) return;

    const itemToAdd = {
      id: Math.floor(Math.random() * 999999),
      title: item,
      completed: false,
    };

    setTodos([...todos, itemToAdd]);
    setItem("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditStart = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  const handleEditSave = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, title: editText } : todo,
      ),
    );

    setEditId(null);
    setEditText("");
  };

  return (
    <div className="container">
      <Header />

      <div className="container--input">
        <input
          type="text"
          className="container--input_type"
          value={editId ? editText : item}
          onChange={(e) =>
            editId ? setEditText(e.target.value) : setItem(e.target.value)
          }
        />

        {!editId ? (
          <button className="container--input_btn" onClick={handleAddTodo}>
            Add Todo
          </button>
        ) : (
          <button className="container--input_btn" onClick={handleEditSave}>
            Edit Todo
          </button>
        )}
      </div>

      <ToDoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEditStart}
      />
    </div>
  );
};

export default App;
