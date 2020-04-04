import React from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "../contexts/TodoContext";

function TodoList() {
  const list = useTodoState();

  return (
    <ul>
      {list.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default TodoList;
