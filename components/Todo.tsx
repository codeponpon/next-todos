'use client';

import React from 'react';
import { ITodo } from '@/app/(index)/interfaces';
import useTodo from './hooks/useTodo';
import { Button } from './ui/button';

const Todo = ({ data }: { data?: ITodo[] }) => {
  const { todos, initialData, addElement } = useTodo();
  const items: ITodo[] = JSON.parse(JSON.stringify(data));
  if (todos.length == 0) {
    initialData(items);
  }

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
