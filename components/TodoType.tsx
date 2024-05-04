import React from 'react'
import { TodoCard } from './TodoCard';

interface ITodoTypeProps {
    title: string
    data: string[]
}

const TodoType = ({title, data}: ITodoTypeProps) => {
  return (
    <div className="flex flex-col items-stretch border-border border-solid border-2 border-gray-400 h-full">
      <div className="p-4 text-center font-bold bg-gray-300">{title}</div>
      <div className="p-4 text-center">
        {data?.map((item: string) => (
          <TodoCard key={item} value={item} />
        ))}
      </div>
    </div>
  );
}

export default TodoType