import React from "react"
import { TypographyHeadingProps } from "./types"

const H3: React.FC<TypographyHeadingProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <h3
            className={`font-proxima text-punkz-white-1 font-bold text-3xl md:text-[44px]  ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </h3>
    )
}

export default H3
