import { ITodo } from '@/app/(index)/interfaces';
import React from 'react';
import { TodoCard } from './TodoCard';

interface ITodoProps {
  loading: boolean
  data?: ITodo[];
}

const Todo = ({ data, loading }: ITodoProps) => {
  
  return (
    <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      {data &&
        data.map((item: ITodo) => (
          <TodoCard key={item.name} loading={loading} value={item.name} />
        ))}
    </div>
  );
};

export default Todo;
