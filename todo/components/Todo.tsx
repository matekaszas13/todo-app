type Todos = { id: number; name: string };

interface MyTodos {
    todo: Todos
}

const Todo = ({todo}: MyTodos) => {
  return (
    <div>
        <span>{todo.name}</span>
    </div>
  )
}

export default Todo