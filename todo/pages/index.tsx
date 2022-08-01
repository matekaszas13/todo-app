import type { NextPage } from "next";
import { type } from "os";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Todo from "../components/Todo";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
  type Todo = { id: number; name: string };

  const [currentId, setId] = useState<number>(1);

  const [todos, setTodos] = useState<Todo[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  function addTodo() {
    let newTodo: Todo = { id: currentId, name: inputValue };
    setTodos((currentTodos) => {
      const newTodos = [...currentTodos, newTodo];
      return newTodos;
    });
    setId(currentId + 1);
  }

  useEffect(() => {
    console.log(todos)
  }, [todos]);

  return (
    <div>
      <input className={styles.input_plan} placeholder="Your plan goes here.." type="text" onChange={(event) => setInputValue(event.target.value)} />
      <Button buttonName={"add todo"} addTodo={addTodo} />
      {todos.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name}/>)}
    </div>
  );
};

export default Home;
