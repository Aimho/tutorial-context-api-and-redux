import React, { createContext, Dispatch, useReducer, useContext } from "react";

export type TTodoItem = {
  id: number;
  text: string;
  done: boolean;
};

type TodoState = TTodoItem[];

// Provider를 사용하지 않았을 때에는 Context의 값이 undefined 가 되어야 함
const TodoStateContext = createContext<TodoState | undefined>(undefined);

// action
type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

// dispatch
type TodoDispatch = Dispatch<Action>;
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

// reducer
function todoReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unhandled action");
  }
}

// provider
export const TodoContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(todoReducer, [
    {
      id: 1,
      text: "Context API 배우기",
      done: true,
    },
    {
      id: 2,
      text: "TypeScript 배우기",
      done: true,
    },
    {
      id: 3,
      text: "TypeScript 와 Context API 함께 사용하기",
      done: false,
    },
  ]);

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={state}>
        {props.children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error("State Provider not fund");
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("Dispatch Provider not fund");
  return dispatch;
}
