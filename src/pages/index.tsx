import React from "react"
import HomepageHero from "../components/feature/homepage/HomepageHero"
import Header from "../components/global/Header"

const Index = () => {
    return (
        <main className="bg-black h-[100vh] overflow-x-hidden">
            <Header />
            <HomepageHero />
        </main>
    )
}

export default Index
