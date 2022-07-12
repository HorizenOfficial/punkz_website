import React from "react"

const HomepageHeroLinkArrow: React.FC<React.SVGProps<SVGSVGElement>> = (
    props
) => {
    return (
        <svg
            width="13"
            height="19"
            viewBox="0 0 13 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#D5D5D5"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            <path
                d="M2.35645 2L9.71308 9.68889L2.35645 17.3778"
                strokeWidth="4"
            />
        </svg>
    )
}

export default HomepageHeroLinkArrow
