import React from "react"
import { TypographyBodyProps } from "./types"

const Body1: React.FC<TypographyBodyProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <p
            className={`font-roboto font-bold text-horizen-white-1 text-[22px] leading-[30px] ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </p>
    )
}

export default Body1
