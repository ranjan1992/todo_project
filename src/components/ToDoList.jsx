import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, handleDelete }) => {
  return (
    <div className="todo_container">
      {todos.map((todo) => (
        <ToDoItem key={todo.item} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ToDoList;
