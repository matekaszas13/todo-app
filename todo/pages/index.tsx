import type { NextPage } from "next";
import Button from "../components/Button";
import Todo from "../components/Todo";

const Home: NextPage = () => {

  type Todos = { id: number; name: string };

  const todos: Todos = { id: 1, name: "Take the children from school at 3PM" };

  return (
    <div>
      <Button buttonName={"add todo"} />
      <Todo todo={todos}/>
    </div>
  );
};

export default Home;
