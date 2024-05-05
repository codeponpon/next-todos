"use client";

import { ITodo } from "@/app/(index)/interfaces";
import {
  ReactNode,
  createContext,
  useState,
} from "react";

type TodoContextType = {
  todos: ITodo[];
  selectedTodos: ITodo[];
  initialData: (todos: ITodo[]) => void;
  addElement: (todo: ITodo) => void;
  removeElement: (todo: ITodo) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedTodos, setSelectedTodos] = useState<ITodo[]>([]);

  const addElement = (todo: ITodo) => {
    todo.created_at = new Date().getTime()
    setSelectedTodos((prev) => {
      const newTodos = [...prev];
      newTodos.push(todo);
      return newTodos;
    });

    const todoList = todos.filter((td: ITodo) => td.name != todo.name)
    setTodos(todoList);
  };

  const removeElement = (todo: ITodo) => {
    todo.created_at = null
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
        addElement,
        removeElement
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
