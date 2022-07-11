import React from "react"
import { TypographyHeadingProps } from "./types"

const H2: React.FC<TypographyHeadingProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <h2
            className={`font-roboto text-horizen-white-1 font-bold text-4xl md:text-[45px] leading-[53px] ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </h2>
    )
}

export default H2
