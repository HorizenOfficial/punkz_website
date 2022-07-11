import React from "react"
import { TypographyLinkProps } from "./types"

export interface Link1Props extends TypographyLinkProps {
    showBrackets?: boolean
}

const Link1: React.FC<Link1Props> = ({
    children,
    className = "",
    showBrackets = false,
    ...rest
}) => {
    return (
        <a
            className={`font-roboto cursor-pointer text-horizen-white-1 font-bold text-[14px] leading-[30px] hover:underline underline-offset-4 decoration-horizen-purple ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {showBrackets && "[ "}
            {children}
            {showBrackets && " ]"}
        </a>
    )
}

export default Link1
