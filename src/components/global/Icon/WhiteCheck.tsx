import React from "react"

const WhiteCheck: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            <path
                d="M2 10.3076L7.67238 16L22 2"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="square"
            />
        </svg>
    )
}

export default WhiteCheck
