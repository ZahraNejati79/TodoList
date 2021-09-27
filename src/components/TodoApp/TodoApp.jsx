import { useEffect, useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/Todolist";
import ShowComplete from "./ShowComplete/ShowComplete";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    setSelectedOption(selectedOption);
    selectStatus(selectedOption);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => id === todo.id);
    // clon todoSelected
    const todoSelected = { ...todos[index] };
    todoSelected.isCompleted = !todoSelected.isCompleted;
    //clon todos
    const updatedTodos = [...todos];
    updatedTodos[index] = todoSelected;
    setTodos(updatedTodos);
  };
  const deleteHandler = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };
  const onUpdateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => id === todo.id);
    const todoSelected = { ...todos[index] };
    todoSelected.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = todoSelected;
    setTodos(updatedTodos);
  };
  const changeHandler = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    console.log("changeHandler", selectedOption);
  };

  const selectStatus = (selectOption) => {
    switch (selectOption) {
      case "All": {
        setFilter(todos);
        break;
      }
      case "Completed": {
        setFilter(todos.filter((todo) => todo.isCompleted));
        break;
      }
      case "Uncompleted": {
        setFilter(todos.filter((todo) => !todo.isCompleted));
        break;
      }
      default: {
        setFilter(todos);
        break;
      }
    }
  };
  return (
    <div>
      <ShowComplete
        completed={todos.filter((todo) => !todo.isCompleted).length}
        selectedOption={selectedOption}
        changeHandler={changeHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filter}
        onComplete={completeHandler}
        onDelete={deleteHandler}
        onUpdateTodo={onUpdateTodo}
      />
    </div>
  );
};

export default TodoApp;
