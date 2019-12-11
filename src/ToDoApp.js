import React, { useState } from "react";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

const ToDoApp = props => {
  const [todoList, updateToDoList] = useState([
    { id: 1, name: "This thing", done: false }
  ]);

  return (
    <div>
      <AddToDo updateToDoList={updateToDoList} />
      <ToDoList list={todoList} updateToDoList={updateToDoList} />
    </div>
  );
};

export default ToDoApp;
