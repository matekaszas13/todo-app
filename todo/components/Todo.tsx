import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Todo.module.css";

interface Todo {
  id: number;
  name: string;
  isFavourite: boolean;
  className: string;
  deleteToDo: Function;
  changeCheckBoxValue: Function;
}

const Todo: React.FC<Todo> = ({
  id,
  name,
  className,
  deleteToDo,
  isFavourite,
  changeCheckBoxValue
}: Todo) => {
  return (
    <div className={className} id={id.toString()}>
      <span className={styles.todo_text}>{name}</span>
      <input type="checkbox" defaultChecked={isFavourite} onChange={(event) => changeCheckBoxValue(id)}/>
      <FontAwesomeIcon
        onClick={() => deleteToDo(id)}
        className={styles.delete_icon}
        icon={faTrash}
      />
      <FontAwesomeIcon className={styles.edit_icon} icon={faPencilAlt}/>
    </div>
  );
};

export default Todo;
