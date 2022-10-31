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
import HomepagePlayAndEarn from "../components/feature/homepage/HomepagePlayAndEarn"
import HomepageMoreWaysToEarnPkz from "../components/feature/homepage/HomepageMoreWaysToEarnPkz"

const Index = () => {
    return (
        <PageContainer>
            <HomepageHelmet />
            <Header />
            <HomepageHero />
            <HomepagePlayAndEarn className="pt-24" />
            <HomepageMoreWaysToEarnPkz className="pt-24 md:pt-40" />
            <HomepageWallet className="pt-24" />
            <HomepagePunkzToken className="pt-24 lg:pt-[150px] xl:pt-[200px]" />
            <HomepageDiscord className="pt-24" />
            {/* Uncomment the below code when we have some FAQ copies */}
            {/* <HomepageFAQ /> */}
            <Newsletter />
            <Footer />
        </PageContainer>
    )
}

export default Index
