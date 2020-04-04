import React from "react";
import styled from "styled-components";
import { ITodoItem, useTodoDispatch } from "../contexts/TodoContext";

const StyledTodoItem = styled.li`
  &.TodoItem {
    &.done .text {
      color: #999;
      text-decoration: line-through;
    }
    .text {
      cursor: pointer;
    }
    .remove {
      color: red;
      margin-left: 4px;
      cursor: pointer;
    }
  }
`;

function TodoItem(props: ITodoItem) {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: props.id
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: props.id
    });
  };

  return (
    <StyledTodoItem className={`TodoItem ${props.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {props.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (x)
      </span>
    </StyledTodoItem>
  );
}

export default TodoItem;
