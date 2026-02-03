import { useState } from "react";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const ToDoItem = ({ todo, handleDelete, handleEdit }) => {
  const [toggle, setToggle] = useState(false);
  const [iscomplete, setIsComplete] = useState(false);

  const handleClick = (todo) => {
    setToggle(!toggle);
    todo.completed = !toggle;
    setIsComplete(todo.completed);
  };
  return (
    <div className={`todoItem ${iscomplete && "stroke"}`}>
      <span className="todoItem--span">{todo.title}</span>
      <div className="todoItem--icons">
        <button onClick={() => handleDelete(todo.id)}>
          <FaTrash />
        </button>
        <button onClick={() => handleEdit(todo)}>
          <FaEdit />
        </button>
        <button onClick={() => handleClick(todo)}>
          {!toggle ? <FaRegCircle /> : <FaCheckCircle />}
        </button>
        {/* <button>
          <FaRegCircle />
        </button> */}
      </div>
    </div>
  );
};

export default ToDoItem;
