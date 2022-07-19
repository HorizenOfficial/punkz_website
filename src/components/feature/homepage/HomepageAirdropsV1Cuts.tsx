import React from "react"

interface CutProps {
    className: string
}

const TopCut: React.FC<CutProps> = ({ className }) => {
    return (
        <div
            className={`border-punkz-black-1 w-full border-r-transparent border-t-[28px] border-r-[28px] ${className}`}
        />
    )
}

const BottomCut: React.FC<CutProps> = ({ className }) => {
    return (
        <div
            className={`border-punkz-black-1 w-full border-l-transparent border-b-[28px] border-l-[28px] ${className}`}
        />
    )
}

export { CutProps, TopCut, BottomCut }
