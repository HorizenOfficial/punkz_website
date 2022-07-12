import React from "react"
import HomepageHelmet from "../components/feature/homepage/HomepageHelmet"
import bgImg from "../assets/images/coming-soon.jpeg"
import bgImgSmall from "../assets/images/coming-soon-small.png"

const Index = () => {
    const className = "h-full w-full bg-center bg-contain bg-no-repeat"
    return (
        <main className="bg-black h-[100vh]">
            <HomepageHelmet />
            <div
                className={`${className} hidden lg:block`}
                style={{ backgroundImage: `url(${bgImg})` }}
            />
            <div
                className={`${className} block lg:hidden bg-cover md:bg-contain`}
                style={{ backgroundImage: `url(${bgImgSmall})` }}
            />
        </main>
    )
}

export default Index
