const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div key={todo.id} className="todo">
      <div
        onClick={() => onComplete(todo.id)}
        className={todo.isCompleted ? "completed" : ""}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
