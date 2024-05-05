'use client';

import React, { useEffect } from 'react';
import { ITodo } from '@/app/(index)/interfaces';
import useTodo from './hooks/useTodo';
import { Button } from './ui/button';

const Todo = ({ data }: { data?: ITodo[] }) => {
  const items: ITodo[] = JSON.parse(JSON.stringify(data));
  const { todos, initialData, addElement, selectedTodos, removeElement } =
    useTodo();
  
  useEffect(() => {
    if (todos.length == 0) {
      initialData(items);
    }

    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      selectedTodos.forEach((todo: ITodo) => {
        if (todo.created_at){
          const diff = now - todo.created_at;
          const newSeconds = Math.floor((diff % (1000 * 60)) / 1000);
          if(newSeconds >= 5){
            removeElement(todo);
          }
        }
      })
    }, 1000)
    
    return () => clearInterval(updateTime);

  }, [todos, items, initialData, selectedTodos, removeElement])

  return (
    <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      {todos &&
        todos.map((item: ITodo, i: number) => (
          <Button
            key={i}
            variant={"outline"}
            className="h-[50px]"
            onClick={(e) => {
              e.stopPropagation();
              addElement(item);
            }}
          >
            <p className="text-lg">{item.name}</p>
          </Button>
        ))}
    </div>
  );
};

export default Todo;
