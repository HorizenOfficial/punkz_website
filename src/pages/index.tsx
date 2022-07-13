import React from "react"
import HomepageAirdrops from "../components/feature/homepage/HomepageAirdrops"
import HomepageHero from "../components/feature/homepage/HomepageHero"
import HomepageWallet from "../components/feature/homepage/HomepageWallet"
import Header from "../components/global/Header"
import { PageContainer } from "../components/global/Layout"

const Index = () => {
    return (
        <PageContainer>
            <Header />
            <HomepageHero />
            <HomepageAirdrops className="pt-[85px]" />
            <HomepageWallet className="pt-10 md:pt-[85px] xl:pt-[150px]" />
        </PageContainer>
    )
}

export default Index
