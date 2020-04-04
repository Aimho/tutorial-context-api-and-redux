import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <article style={{ padding: "32px" }}>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </article>
  );
}

export default App;
