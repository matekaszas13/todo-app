import React from "react"

type ButtonProp = {
    buttonName: String,
    addTodo: Function
}

const Button: React.FunctionComponent<ButtonProp> = ({buttonName, addTodo}) => {
    
  return (
    <button onClick={() => addTodo()}>{buttonName}</button>
  )
}

export default Button