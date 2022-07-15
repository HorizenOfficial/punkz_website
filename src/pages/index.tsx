import React from "react"
import HomepageAirdrops from "../components/feature/homepage/HomepageAirdrops"
import HomepageHero from "../components/feature/homepage/HomepageHero"
import Header from "../components/global/Header"
import { PageContainer } from "../components/global/Layout"

const Index = () => {
    return (
        <PageContainer>
            <Header />
            <HomepageHero />
            <HomepageAirdrops className="pt-[85px]" />
        </PageContainer>
    )
}

export default Index
