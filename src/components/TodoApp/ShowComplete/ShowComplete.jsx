import { useState } from "react";
const ShowComplete = ({ status }) => {
  if (!status) return <h2>enter todo</h2>;

  return (
    <header>
      <h2>
        <span>{status}</span> are not completed
      </h2>
    </header>
  );
};

export default ShowComplete;
