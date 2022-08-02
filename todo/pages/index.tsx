import type { NextPage } from "next";
import { type } from "os";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Todo from "../components/Todo";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
  type Todo = { id: number; name: string; isFavourite: boolean };

  const [currentId, setId] = useState<number>(1);

  const [todos, setTodos] = useState<Todo[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  function addTodo() {
    if (inputValue !== "") {
      let newTodo: Todo = { id: currentId, name: inputValue, isFavourite: false };
      setTodos((currentTodos) => {
        const newTodos = [...currentTodos, newTodo];
        return newTodos;
      });
      setId(currentId + 1);
      setInputValue("");
    } else {
      alert("Write your plan");
    }
  }

  function deleteTodo(id: number) {
    const FilteredTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(FilteredTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <div className={styles.content}>
        <input
          className={styles.input_plan}
          placeholder="Your plan goes here.."
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button
          className={styles.add_btn}
          buttonName={"add todo"}
          addTodo={addTodo}
        />
      </div>
      <div className={styles.todos}>
        {todos.map((todo) => (
          <Todo
            deleteToDo={deleteTodo}
            className={styles.single_todo}
            key={todo.id}
            id={todo.id}
            name={todo.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
