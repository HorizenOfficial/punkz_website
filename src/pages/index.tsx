import React from "react"
import HomepageHelmet from "../components/feature/homepage/HomepageHelmet"
import HomepageDiscord from "../components/feature/homepage/HomepageDiscord"
import HomepageHero from "../components/feature/homepage/HomepageHero"
import HomepagePunkzToken from "../components/feature/homepage/HomepagePunkzToken"
import HomepageWallet from "../components/feature/homepage/HomepageWallet"
import Footer from "../components/global/Footer"
import Header from "../components/global/Header"
import { PageContainer } from "../components/global/Layout"
import Newsletter from "../components/global/Newsletter"
import HomepageAirdrops from "../components/feature/homepage/HomepageAirdrops"

const Index = () => {
    return (
        <PageContainer>
            <HomepageHelmet />
            <Header />
            <HomepageHero />
            <HomepageAirdrops className="pt-[65px] lg:pt-[100px]" />
            <HomepageWallet className="pt-[65px] lg:pt-[100px]" />
            <HomepagePunkzToken className="pt-[65px] lg:pt-[150px] xl:pt-[200px]" />
            <HomepageDiscord className="pt-[65px] lg:pt-[100px]" />
            {/* Uncomment the below code when we have some FAQ copies */}
            {/* <HomepageFAQ /> */}
            <Newsletter />
            <Footer />
        </PageContainer>
    )
}

export default Index
