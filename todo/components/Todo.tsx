interface Todo {
  id: number;
  name: string;
  className: string;
}

const Todo : React.FC<Todo> = ({id, name, className} : Todo) => {

  return (
    <div className={className} id={id.toString()}>
      <span>{name}</span>
    </div>
  );
};

export default Todo;
