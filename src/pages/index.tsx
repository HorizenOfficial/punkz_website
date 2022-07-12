import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import HomepageHelmet from "../components/feature/homepage/HomepageHelmet"

const Index = () => {
    return (
        <main className="bg-black h-[100vh]">
            <HomepageHelmet />
            <StaticImage
                src="../assets/images/coming-soon.jpeg"
                alt="PunkZ coming soon"
                loading="eager"
                class="hidden lg:block !static !max-h-[100vh] !m-auto"
                objectFit="contain"
            />

            <StaticImage
                src="../assets/images/coming-soon-small.png"
                alt="PunkZ coming soon"
                loading="eager"
                class="block lg:hidden !static !max-h-[100vh] !m-auto"
                objectFit="contain"
            />
        </main>
    )
}

export default Index
