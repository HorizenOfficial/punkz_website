import React from "react"

const SectionContainer: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ className, children, ...props }) => {
    return (
        <div
            className={`mx-auto max-w-[1920px] 3xl:max-w-screen-2xl ${
                className || ""
            }`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </div>
    )
}
export default SectionContainer
