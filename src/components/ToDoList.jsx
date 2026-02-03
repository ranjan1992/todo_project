import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div className="todo_container">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
