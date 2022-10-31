import React from "react"
import { twMerge } from "tailwind-merge"
import { TypographyHeadingProps } from "./types"

const H2: React.FC<TypographyHeadingProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <h2
            className={twMerge(
                "font-workhard text-white font-normal text-6xl lg:text-7xl",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </h2>
    )
}

export default H2
