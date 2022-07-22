import React from "react"
import { twMerge } from "tailwind-merge"

interface TextFieldProps {
    name?: string
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
    value: string
    className?: string
    error?: string
}

const TextField: React.FC<TextFieldProps> = ({ className, error, ...rest }) => {
    return (
        <div className="relative w-full">
            <input
                className={twMerge(
                    "transition-colors w-full px-[26px] bg-primary-light text-black placeholder:text-black font-proxima font-medium text-[18px] leading-[35px] h-[52px] border-2 border-black grow hover:bg-primary focus:bg-primary",
                    className
                )}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
            />

            {error && (
                <div className="absolute h-[52px] px-[26px] right-0 bottom-0 text-[16px] flex items-center justify-center">
                    <span className="text-secondary">{error}</span>
                </div>
            )}
        </div>
    )
}

export default TextField
