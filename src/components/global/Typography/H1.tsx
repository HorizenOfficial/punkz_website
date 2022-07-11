import React from "react"
import { TypographyHeadingProps } from "./types"

const H1: React.FC<TypographyHeadingProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <h1
            className={`font-roboto text-horizen-white-1 font-bold text-4xl md:text-[61px] leading-[69px] ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </h1>
    )
}

export default H1
