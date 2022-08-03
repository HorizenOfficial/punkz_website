import React from "react"
import OptInSuccessPageBody from "../components/feature/optInSuccessPage/OptInSuccessPageBody"
import Footer from "../components/global/Footer"
import Header from "../components/global/Header"
import { PageContainer } from "../components/global/Layout"

const optInSuccessPage = () => {
    return (
        <PageContainer>
            <Header />
            <OptInSuccessPageBody />
            <Footer />
        </PageContainer>
    )
}

export default optInSuccessPage
