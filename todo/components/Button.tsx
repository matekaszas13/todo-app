import React from "react"

type ButtonProp = {
    buttonName: String,
    addTodo: Function,
    className: string
}

const Button: React.FC<ButtonProp> = ({buttonName, addTodo, className}) => {
    
  return (
    <button className={className} onClick={() => addTodo()}>{buttonName}</button>
  )
}

export default Button