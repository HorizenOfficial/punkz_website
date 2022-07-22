import React from "react"
import { twMerge } from "tailwind-merge"

interface CutProps {
    className: string
}

const TopCut: React.FC<CutProps> = ({ className }) => {
    return (
        <div
            className={twMerge(
                "border-black w-full border-r-transparent border-t-[28px] border-r-[28px]",
                className
            )}
        />
    )
}

const BottomCut: React.FC<CutProps> = ({ className }) => {
    return (
        <div
            className={twMerge(
                "border-black w-full border-l-transparent border-b-[28px] border-l-[28px]",
                className
            )}
        />
    )
}

export { CutProps, TopCut, BottomCut }
