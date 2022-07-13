import React from "react"
import { TypographySmallProps } from "./types"

const Small1: React.FC<TypographySmallProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <small
            className={`font-proxima font-medium text-[18px] leading-[35px] text-punkz-white-1 ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </small>
    )
}

export default Small1
