import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Todo.module.css";
import { useEffect, useState } from "react";
import Popup from "./Popup";

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
  className: string;
  deleteToDo: Function;
  changeCheckBoxValue: Function;
  addNewNameForOneTodo: Function;
}

const Todo: React.FC<Todo> = ({
  id,
  name,
  className,
  deleteToDo,
  isCompleted,
  changeCheckBoxValue,
  addNewNameForOneTodo
}: Todo) => {

  const [completedText, setCompletedText] = useState<string>("not Completed");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    isCompleted ? setCompletedText("Completed") : setCompletedText("not Completed");
  }, [isCompleted]);

  return (
    <div>
      {isOpen && <Popup id={id} setNewNameForOneTodo={addNewNameForOneTodo} setIsOpen={setIsOpen}/>}
      <div className={className} id={id.toString()}>
      <span className={styles.todo_text}>{name}</span>
      <span>{completedText}</span>
      <input type="checkbox" checked={isCompleted} onChange={() => changeCheckBoxValue(id)}/>
      <FontAwesomeIcon
        onClick={() => deleteToDo(id)}
        className={styles.delete_icon}
        icon={faTrash}
      />
      <FontAwesomeIcon onClick={() => setIsOpen(true)} className={styles.edit_icon} icon={faPencilAlt}/>
    </div>
    </div>
    
  );
};

export default Todo;
