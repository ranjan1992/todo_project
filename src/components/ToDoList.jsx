import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos }) => {
  return (
    <div className="todo_container">
      {todos.map((todo) => (
        <ToDoItem key={todo.item} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
