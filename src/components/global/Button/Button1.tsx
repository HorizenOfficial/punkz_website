import React from "react"
import { ButtonProps } from "./types"

const Button1: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button type="button" {...props}>
            {children}
        </button>
    )
}

export default Button1
