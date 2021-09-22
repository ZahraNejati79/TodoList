import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  const renderTodo = () => {
    if (todos.length === 0) return <p>Add some Todo</p>;

    return todos.map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });
  };
  return renderTodo();
};

export default TodoList;
