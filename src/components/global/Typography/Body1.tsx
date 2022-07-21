import React from "react"
import { twMerge } from "tailwind-merge"
import { TypographyBodyProps } from "./types"

const Body1: React.FC<TypographyBodyProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <p
            className={twMerge(
                "font-proxima text-punkz-white-1 font-medium text-[22px] leading-[35px]",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </p>
    )
}

export default Body1
