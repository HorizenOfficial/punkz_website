import React from "react"

interface BigBoxProps {
    children: React.ReactNode
    className: string
    innerClassName: string
}

const BigBox: React.FC<BigBoxProps> = ({
    children,
    className,
    innerClassName,
}) => {
    return (
        <div className={`flex items-center pb-[60px] pt-[40px] ${className}`}>
            <div
                className={`flex max-w-[750px] flex-col gap-7 ${innerClassName}`}
            >
                {children}
            </div>
        </div>
    )
}

interface SmallBoxProps {
    children: React.ReactNode
    className: string
}
const SmallBox: React.FC<SmallBoxProps> = ({ children, className }) => {
    return (
        <div className={`flex items-center py-[40px] ${className}`}>
            {children}
        </div>
    )
}

export { SmallBox, BigBox }
