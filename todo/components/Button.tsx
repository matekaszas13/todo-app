import React from "react"

type ButtonProp = {
    buttonName: String
}

const Button: React.FunctionComponent<ButtonProp> = ({buttonName}) => {
    
  return (
    <button>{buttonName}</button>
  )
}

export default Button