import React from "react"
import { twMerge } from "tailwind-merge"

const ContentContainer: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ className, children, ...props }) => {
    return (
        <div
            className={twMerge(
                "px-6 md:px-12 lg:px-8 xl:px-2 max-w-screen-xl mx-auto",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </div>
    )
}

export default ContentContainer
