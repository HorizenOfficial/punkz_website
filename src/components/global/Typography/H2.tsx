import React from "react"
import { TypographyHeadingProps } from "./types"

const H2: React.FC<TypographyHeadingProps> = ({
    children,
    className = "",
    ...rest
}) => {
    return (
        <h2
            className={`font-workhard text-punkz-white-1 font-bold text-[60px] leading-[auto] md:text-[90px] md:leading-[80px] ${className}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </h2>
    )
}

export default H2
