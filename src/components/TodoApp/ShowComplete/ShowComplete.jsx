import { useState } from "react";
import Select from "react-select";

const ShowComplete = ({ completed, changeHandler, selectedOption }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  if (!completed) return <h2>Set your today todos</h2>;

  return (
    <header>
      <h2>
        <span>{completed}</span> todos are not completed
      </h2>
      <Select
        value={selectedOption}
        options={options}
        onChange={changeHandler}
      />
    </header>
  );
};

export default ShowComplete;
