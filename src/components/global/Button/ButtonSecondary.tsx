import React from "react"
import { twMerge } from "tailwind-merge"
import { ButtonProps } from "./types"

const ButtonSecondary: React.FC<ButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            type="button"
            className={twMerge(
                "transition-colors w-full max-w-full md:max-w-[min(220px,100%)] h-[52px] flex justify-center items-center font-proxima font-bold text-[22px] leading-[35px] text-white bg-black border-white hover:text-primary-light disabled:!opacity-70 disabled:!bg-black disabled:!text-white",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary
