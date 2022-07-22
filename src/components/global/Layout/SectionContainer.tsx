import React from "react"
import { twMerge } from "tailwind-merge"

const SectionContainer: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ className, children, ...props }) => {
    return (
        <div
            className={twMerge(
                "mx-auto max-w-screen-3xl 3xl:max-w-screen-2xl",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </div>
    )
}
export default SectionContainer
