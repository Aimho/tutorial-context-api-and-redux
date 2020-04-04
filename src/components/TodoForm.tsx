import React, { useState } from "react";
import { useTodoDispatch } from "../contexts/TodoContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: "CREATE",
      text: value
    });

    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Tutorial Context API</h4>
      <input
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={e => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
