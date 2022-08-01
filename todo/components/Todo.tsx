interface Todo {
  id: number;
  name: string;
}

const Todo : React.FC<Todo> = ({id, name} : Todo) => {

  return (
    <div id={id.toString()}>
      <span>{name}</span>
    </div>
  );
};

export default Todo;
