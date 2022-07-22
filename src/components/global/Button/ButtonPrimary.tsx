import React from "react"
import { twMerge } from "tailwind-merge"
import BaseButton from "./BaseButton"
import { ButtonProps } from "./types"

const ButtonPrimary: React.FC<ButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <BaseButton
            className={twMerge(
                "transition-colors w-full max-w-full md:max-w-[min(343px,100%)] h-[67px] border-2 flex justify-center items-center font-proxima font-bold text-[22px] leading-[35px] text-punkz-white-1 bg-punkz-black-1 border-punkz-white-1 hover:bg-punkz-pink-4 hover:border-punkz-pink-2",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </BaseButton>
    )
}

export default ButtonPrimary
