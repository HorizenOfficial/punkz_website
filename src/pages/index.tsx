import React from "react"
import HomepageAirdrops from "../components/feature/homepage/HomepageAirdrops"
import HomepageDiscord from "../components/feature/homepage/HomepageDiscord"
import HomepageFAQ from "../components/feature/homepage/HomepageFAQ"
import HomepageHelmet from "../components/feature/homepage/HomepageHelmet"
import HomepageHero from "../components/feature/homepage/HomepageHero"
import HomepagePunkzToken from "../components/feature/homepage/HomepagePunkzToken"
import HomepageWallet from "../components/feature/homepage/HomepageWallet"
import Footer from "../components/global/Footer"
import Header from "../components/global/Header"
import { PageContainer } from "../components/global/Layout"
import Newsletter from "../components/global/Newsletter"

const Index = () => {
    return (
        <PageContainer>
            <HomepageHelmet />
            <Header />
            <HomepageHero />
            <HomepageAirdrops className="pt-[43px] lg:pt-[85px]" />
            <HomepageWallet className="pt-[118px] lg:pt-[150px] xl:pt-[150px]" />
            <HomepagePunkzToken className="pt-[118px] lg:pt-[150px] xl:pt-[200px]" />
            <HomepageDiscord className="pt-[118px] lg:pt-[150px] xl:pt-[200px]" />
            <HomepageFAQ />
            <Newsletter />
            <Footer />
        </PageContainer>
    )
}

export default Index
