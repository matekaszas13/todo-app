import type { NextPage } from "next";
import { type } from "os";
import Button from "../components/Button";
import Todo from "../components/Todo";

const Home: NextPage = () => {

  type Todo = { id: number; name: string }

  type Todos = [Todo][];

  const todos: Todos = [];

  return (
    <div>
      <Button buttonName={"add todo"} />
      {/* <Todo todo={todos}/> */}
    </div>
  );
};

export default Home;
