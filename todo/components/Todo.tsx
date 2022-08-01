import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FaTrash } from "react-icons/bs";

interface Todo {
  id: number;
  name: string;
  className: string;
}

const Todo : React.FC<Todo> = ({id, name, className} : Todo) => {

  return (
    <div className={className} id={id.toString()}>
      <span>{name}</span>
      <FontAwesomeIcon icon={faTrash}/>
    </div>
  );
};

export default Todo;
