import React from "react"
import { twMerge } from "tailwind-merge"
import { TypographyLinkProps } from "./types"

const Link1: React.FC<TypographyLinkProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <a
            className={twMerge(
                "transition-colors font-proxima font-medium text-[18px] leading-[35px] text-white hover:text-primary-light",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </a>
    )
}

export default Link1
