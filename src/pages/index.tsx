import React from "react"
import comingSoonImg from "../assets/images/coming-soon.jpeg"
import HomepageHelmet from "../components/feature/homepage/HomepageHelmet"

const Index = () => {
    return (
        <main
            className="bg-contain bg-center bg-no-repeat bg-black h-[100vh] w-[100vw]"
            style={{ backgroundImage: `url(${comingSoonImg})` }}
        >
            <HomepageHelmet />
        </main>
    )
}

export default Index
