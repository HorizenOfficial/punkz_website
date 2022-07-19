import React from "react"
import { TypographyBodyProps } from "./types"

const Body2: React.FC<TypographyBodyProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <p
            className={`font-roboto text-horizen-white-2 text-[22px] leading-[30px] ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </p>
    )
}

export default Body2
