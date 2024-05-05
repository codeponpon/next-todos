"use client";

import { ITodo } from "@/app/(index)/interfaces";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type TodoContextType = {
  todos: ITodo[];
  selectedTodos: ITodo[];
  initialData: (todos: ITodo[]) => void;
  setElements: Dispatch<SetStateAction<ITodo[]>>;
  addElement: (todo: ITodo) => void;
  removeElement: (todo: ITodo) => void;
  selectedElement: ITodo | null;
  setSelectedElement: Dispatch<SetStateAction<ITodo | null>>;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedTodos, setSelectedTodos] = useState<ITodo[]>([]);
  const [selectedElement, setSelectedElement] = useState<ITodo | null>(null);

  const addElement = (todo: ITodo) => {
    setSelectedTodos((prev) => {
      const newTodos = [...prev];
      newTodos.push(todo);
      return newTodos;
    });

    const todoList = todos.filter((td: ITodo) => td.name != todo.name)
    setTodos(todoList);
  };

  const removeElement = (todo: ITodo) => {
    setSelectedTodos((prev) =>
      prev.filter((element) => element.name !== todo.name)
    );
    const todoList = [...todos, todo]
    setTodos(todoList)
  };

  const initialData = (data: ITodo[]) => {
    setTodos(data)
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodos,
        initialData,
        setElements: setTodos,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
