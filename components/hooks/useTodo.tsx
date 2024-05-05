"use client";

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoContext");
  }

  return context;
}

export default useTodo;
