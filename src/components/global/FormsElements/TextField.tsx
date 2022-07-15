import React from "react"

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
                className={`transition-colors w-full px-[26px] bg-punkz-pink-2 text-punkz-black-1 placeholder:text-punkz-black-1 font-proxima font-medium text-[18px] leading-[35px] h-[52px] border-2 border-punkz-black-1 grow hover:bg-punkz-pink-3 focus:bg-punkz-pink-3
                ${className || ""}
                ${error ? "border-horizen-red focus:border-horizen-red" : ""}
                `}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
            />

            {error && (
                <div className="absolute h-[52px] px-[26px] right-0 bottom-0 text-[16px] flex items-center justify-center">
                    <span className="text-punkz-blue-1">{error}</span>
                </div>
            )}
        </div>
    )
}

export default TextField
