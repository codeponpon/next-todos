import React from "react";
import { promises as fs } from 'fs';
import Todo from "@/components/Todo";
import { ITodo } from "./interfaces";
import TodoType from "@/components/TodoType";

const Home = async () => {
  const resp = await fs.readFile(process.cwd() + "/data/list.json", "utf8");
  const data = JSON.parse(resp);
  const types = data
    .map((item: ITodo) => item.type)
    .filter(
      (type: string, i: number, types: string[]) => types.indexOf(type) == i
    );
  return (
    <div className="container pt-4">
      <div className="flex gap-4">
        <div className="w-4/12">
          {data && <Todo loading={false} data={data} />}
        </div>

        {types &&
          types.map((type: string) => (
            <div className="w-4/12" key={type}>
              <TodoType title={type} data={[]} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
