import React from "react";
import { promises as fs } from 'fs';
import Todo from "@/components/Todo";
import { ITodo } from "./interfaces";
import TodoType from "@/components/TodoType";

const Home = async () => {
  const resp = await fs.readFile(process.cwd() + "/data/list.json", "utf8");
  const data = JSON.parse(resp);
  const types: string[] = data
    .map((item: ITodo) => item.type)
    .filter(
      (type: string, i: number, types: string[]) => types.indexOf(type) == i
    )
    
  return (
    <div className="container pt-4">
      <div className="flex gap-4">
        <div className="w-4/12">
          {data && <Todo data={data} />}
        </div>

        <TodoType data={types} />
      </div>
    </div>
  );
};

export default Home;
