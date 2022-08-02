import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Todo.module.css';

interface Todo {
  id: number;
  name: string;
  isFavourite: boolean;
  className: string;
  deleteToDo: Function;
}

const Todo : React.FC<Todo> = ({id, name, className, deleteToDo, isFavourite} : Todo) => {

  return (
    <div className={className} id={id.toString()}>
      <span className={styles.todo_text}>{name}</span>
      <input type="checkbox" checked={isFavourite} />
      <FontAwesomeIcon onClick={() => deleteToDo(id)} className={styles.delete_icon} icon={faTrash}/>
    </div>
  );
};

export default Todo;
