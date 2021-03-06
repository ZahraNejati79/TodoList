import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const renderTodo = () => {
    if (todos.length === 0) return <p>Add some Todo</p>;

    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  const editHandler = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  return (
    <div>
      {edit.id ? (
        <TodoForm submitTodo={editHandler} edit={edit} />
      ) : (
        renderTodo()
      )}
    </div>
  );
};

export default TodoList;
