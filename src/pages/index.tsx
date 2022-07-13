import React from "react"
import HomepageAirdrops from "../components/feature/homepage/HomepageAirdrops"
import HomepageDiscord from "../components/feature/homepage/HomepageDiscord"
import HomepageFAQ from "../components/feature/homepage/HomepageFAQ"
import HomepageHero from "../components/feature/homepage/HomepageHero"
import HomepagePunkZToken from "../components/feature/homepage/HomepagePunkZToken"
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
            <HomepagePunkZToken className="pt-10 md:pt-[85px] lg:pt-[150px] xl:pt-[200px]" />
            <HomepageDiscord className="pt-10 md:pt-[85px] lg:pt-[150px] xl:pt-[200px]" />
            <HomepageFAQ />
        </PageContainer>
    )
}

export default Index
