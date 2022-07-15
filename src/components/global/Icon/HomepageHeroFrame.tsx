import React from "react"

const HomepageHeroFrame: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="1258"
            height="36"
            viewBox="0 0 1258 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            <path
                d="M7.88579 36H0V15.2861L15.2685 0H267.681L276.131 8.46045H782.759V16.3554H272.866L264.415 7.89491H18.5337L7.88579 18.5551V36Z"
                fill="white"
            />
            <path
                d="M1258 36H1255.37V26.0645L1243.04 13.7237H771.588V11.0921H1244.13L1258 24.975V36Z"
                fill="white"
            />
        </svg>
    )
}

export default HomepageHeroFrame
