import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const ToDoItem = ({ todo, handleDelete }) => {
  return (
    <div className="todoItem">
      <span className="todoItem--span">{todo.title}</span>
      <div className="todoItem--icons">
        <button onClick={() => handleDelete(todo.id)}>
          <FaTrash />
        </button>
        <button>
          <FaEdit />
        </button>
        <button>
          <FaCheckCircle />
        </button>
        {/* <button>
          <FaRegCircle />
        </button> */}
      </div>
    </div>
  );
};

export default ToDoItem;
