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
                "font-workhard text-white font-normal text-[60px] leading-[initial] lg:text-[90px] lg:leading-[80px]",
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
