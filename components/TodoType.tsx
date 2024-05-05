'use client';

import React from 'react'
import useTodo from './hooks/useTodo';
import { ITodo } from '@/app/(index)/interfaces';
import { Button } from './ui/button';

const TodoType: React.FC<{data: string[]}> = ({data}) => {
  const {selectedTodos: todos, removeElement} = useTodo()
  
  return (
    <>
      {data.map((type: string) => (
        <div key={type} className="w-4/12">
          <div className="flex flex-col items-stretch border-border border-solid border-2 border-gray-400 h-full">
            <div className="p-4 text-center font-bold bg-gray-300">
              {type}
            </div>
            <div className="p-4 text-center">
              <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                {todos?.map((todo: ITodo) => {
                  if (todo.type != type) return;

                  return (
                    <Button
                      key={todo.name}
                      variant={"outline"}
                      className="h-[50px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeElement(todo);
                      }}
                    >
                      <p className="text-lg">{todo.name}</p>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoType