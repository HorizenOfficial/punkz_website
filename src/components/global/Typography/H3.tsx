import React from "react"
import { TypographyHeadingProps } from "./types"

const H3: React.FC<TypographyHeadingProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <h3
            className={`font-roboto text-horizen-white-1 font-bold text-[30px] leading-[35px] ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </h3>
    )
}

export default H3
