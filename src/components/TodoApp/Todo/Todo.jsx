const Todo = ({ todo }) => {
  return (
    <div key={todo.id}>
      <div>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button>completed</button>
      </div>
    </div>
  );
};

export default Todo;
