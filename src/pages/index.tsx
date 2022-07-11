import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import HomepageHelmet from "../components/feature/homepage/HomepageHelmet"

const Index = () => {
    return (
        <main
            className="bg-black h-[100vh] w-[100vw] flex items-center justify-center "
            // style={{ backgroundImage: `url(${comingSoonImg})` }}
        >
            <StaticImage
                src="../assets/images/coming-soon.jpeg"
                alt="PunkZ coming soon"
                imgClassName="!max-w-[100vw]"
                imgStyle={{ maxWidth: "100vw" }}
                loading="eager"
            />
            <HomepageHelmet />
        </main>
    )
}

export default Index
