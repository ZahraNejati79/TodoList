import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";

const App = () => {
  return (
    <div className="App">
      <h1>Todo List </h1>
      <div className="container">
        <TodoApp />
      </div>
    </div>
  );
};

export default App;
