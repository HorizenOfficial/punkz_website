import React from "react"
import HomepageHero from "../components/feature/homepage/HomepageHero"
import Header from "../components/global/Header"
import { PageContainer } from "../components/global/Layout"
import { H2 } from "../components/global/Typography"

const Index = () => {
    return (
        <PageContainer>
            <Header />
            <HomepageHero />
        </PageContainer>
    )
}

export default Index
