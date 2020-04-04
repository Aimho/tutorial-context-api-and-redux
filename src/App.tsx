import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./contexts/TodoContext";
import Counter from "./components/Counter";

function App() {
  return (
    <article style={{ padding: "32px" }}>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>

      <Counter />
    </article>
  );
}

export default App;
