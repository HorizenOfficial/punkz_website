import React from "react"
import { ButtonProps } from "./types"

const ButtonSecondary: React.FC<ButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            type="button"
            className={`transition-colors w-full max-w-full md:max-w-[min(220px,100%)] h-[52px] flex justify-center items-center font-proxima font-bold text-[22px] leading-[35px] text-punkz-white-1 bg-punkz-black-1 border-punkz-white-1 hover:text-punkz-pink-2 disabled:!opacity-70 disabled:!bg-punkz-black-1 disabled:!text-punkz-white-1 ${
                className || ""
            }`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary
