import React from "react"
import { TypographyLinkProps } from "./types"

const Link1: React.FC<TypographyLinkProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <a
            className={`transition-colors font-proxima font-medium text-[18px] leading-[35px] text-punkz-white-1 hover:text-punkz-pink-2 ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </a>
    )
}

export default Link1
